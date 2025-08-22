#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import io
import os
from pathlib import Path
from typing import Tuple

from PIL import Image, ImageOps

TARGET_KB_DEFAULT = 900
MIN_DIM = 300  # 지나친 축소 방지
JPEG_MIN_QUALITY = 35  # JPG 최저 퀄리티 가드
RESIZE_STEP = 0.9  # 리사이즈 비율(10%씩 축소)

VALID_EXTS = {".jpg", ".jpeg", ".png"}


def is_image(path: Path) -> bool:
    return path.suffix.lower() in VALID_EXTS


def ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def bytesio_size_kb(buf: io.BytesIO) -> int:
    return len(buf.getvalue()) // 1024


def save_jpeg_to_buffer(img: Image.Image, quality: int) -> io.BytesIO:
    buf = io.BytesIO()
    img.save(
        buf,
        format="JPEG",
        quality=quality,
        optimize=True,
        progressive=True,
        subsampling="4:2:0",
    )
    return buf


def save_png_to_buffer(
    img: Image.Image, quantize_colors: int = 256, compress_level: int = 9
) -> io.BytesIO:
    # 투명 채널 보존
    mode = img.mode
    if mode not in ("RGB", "RGBA"):
        img = img.convert("RGBA" if "A" in mode else "RGB")

    candidate = img
    # 팔레트 적용(투명 채널 있으면 P 모드로 전환 시 알파가 손실될 수 있어 RGBA는 양자화 대신 그대로 저장 시도 후 부족하면 리사이즈)
    if candidate.mode == "RGB":
        try:
            candidate = candidate.quantize(
                colors=quantize_colors,
                method=Image.MEDIANCUT,
                dither=Image.FLOYDSTEINBERG,
            )
        except Exception:
            # 양자화 실패 시 원본 모드로 진행
            candidate = img

    buf = io.BytesIO()
    candidate.save(buf, format="PNG", optimize=True, compress_level=compress_level)
    return buf


def orient_image(img: Image.Image) -> Image.Image:
    # EXIF 회전 보정
    try:
        return ImageOps.exif_transpose(img)
    except Exception:
        return img


def binary_search_jpeg_quality(
    img: Image.Image, target_kb: int
) -> Tuple[io.BytesIO, int]:
    lo, hi = JPEG_MIN_QUALITY, 95
    best_buf, best_q = None, None
    while lo <= hi:
        mid = (lo + hi) // 2
        buf = save_jpeg_to_buffer(img, mid)
        size_kb = bytesio_size_kb(buf)
        if size_kb <= target_kb:
            best_buf, best_q = buf, mid
            lo = mid + 1  # 더 좋은 품질 가능성 탐색
        else:
            hi = mid - 1
    if best_buf is None:
        # 타겟에 못 미치면 최저 퀄리티 결과 반환
        best_q = JPEG_MIN_QUALITY
        best_buf = save_jpeg_to_buffer(img, best_q)
    return best_buf, best_q


def downscale(img: Image.Image, factor: float) -> Image.Image:
    w, h = img.size
    new_w, new_h = max(int(w * factor), MIN_DIM), max(int(h * factor), MIN_DIM)
    if new_w == w and new_h == h:
        return img
    return img.resize((new_w, new_h), Image.LANCZOS)


def compress_jpeg(img: Image.Image, target_kb: int) -> io.BytesIO:
    # 색공간 정리
    if img.mode not in ("RGB", "L"):
        img = img.convert("RGB")

    attempt = 0
    cur = img
    while True:
        buf, q = binary_search_jpeg_quality(cur, target_kb)
        if bytesio_size_kb(buf) <= target_kb:
            return buf
        # 리사이즈 후 재시도
        attempt += 1
        if min(cur.size) <= MIN_DIM:
            return buf  # 더 줄이기 어렵다면 현재 최선 반환
        cur = downscale(cur, RESIZE_STEP)


def compress_png(img: Image.Image, target_kb: int) -> io.BytesIO:
    # 첫 시도: 양자화+최대 압축
    attempt = 0
    cur = img
    while True:
        # RGBA(알파 있음) → 양자화 대신 그대로 저장 후 리사이즈로 해결
        if cur.mode == "RGBA":
            buf = save_png_to_buffer(
                cur, quantize_colors=256, compress_level=9
            )  # 알파는 양자화 적용 안됨
        else:
            buf = save_png_to_buffer(cur, quantize_colors=256, compress_level=9)

        if bytesio_size_kb(buf) <= target_kb:
            return buf

        # 리사이즈로 단계적 축소
        attempt += 1
        if min(cur.size) <= MIN_DIM:
            return buf  # 더 줄이기 어렵다면 현재 최선 반환
        cur = downscale(cur, RESIZE_STEP)


def process_image(src: Path, dst: Path, target_kb: int) -> None:
    try:
        with Image.open(src) as im:
            im = orient_image(im)
            ext = src.suffix.lower()
            if ext in (".jpg", ".jpeg"):
                buf = compress_jpeg(im, target_kb)
                ensure_parent(dst)
                with open(dst.with_suffix(".jpg"), "wb") as f:
                    f.write(buf.getvalue())
            elif ext == ".png":
                buf = compress_png(im, target_kb)
                ensure_parent(dst)
                with open(dst.with_suffix(".png"), "wb") as f:
                    f.write(buf.getvalue())
    except Exception as e:
        print(f"[SKIP] {src} ({e})")


def copy_if_small(src: Path, dst: Path, target_kb: int) -> bool:
    try:
        size_kb = src.stat().st_size // 1024
        if size_kb <= target_kb and is_image(src):
            ensure_parent(dst)
            # 그대로 복사
            with open(src, "rb") as s, open(dst, "wb") as d:
                d.write(s.read())
            return True
    except Exception:
        pass
    return False


def compress_folder(input_dir: Path, output_dir: Path, target_kb: int) -> None:
    files = [p for p in input_dir.rglob("*") if p.is_file() and is_image(p)]
    total = len(files)
    if total == 0:
        print("No PNG/JPG images found.")
        return

    for idx, src in enumerate(files, 1):
        rel = src.relative_to(input_dir)
        dst = output_dir / rel
        # 이미 작은 파일은 그대로 복사(확장자 유지)
        if copy_if_small(src, dst, target_kb):
            print(f"[{idx}/{total}] COPY   {rel}")
            continue

        print(f"[{idx}/{total}] COMPRESS {rel}")
        process_image(src, dst, target_kb)

    print("Done.")


def main():
    parser = argparse.ArgumentParser(
        description="Compress images under a folder to target KB, preserving tree."
    )
    parser.add_argument("input", type=str, help="Input folder path")
    parser.add_argument("output", type=str, help="Output folder path")
    parser.add_argument(
        "--target-kb",
        type=int,
        default=TARGET_KB_DEFAULT,
        help="Target size in KB (default: 900)",
    )
    args = parser.parse_args()

    input_dir = Path(args.input).expanduser().resolve()
    output_dir = Path(args.output).expanduser().resolve()

    if not input_dir.exists() or not input_dir.is_dir():
        raise SystemExit(f"Input folder not found: {input_dir}")

    if not output_dir.exists():
        output_dir.mkdir(parents=True, exist_ok=True)

    compress_folder(input_dir, output_dir, args.target_kb)


if __name__ == "__main__":
    main()
