#!/bin/bash

# 사용법 체크
if [ $# -ne 1 ]; then
  echo "사용법: $0 <폴더 경로>"
  exit 1
fi

DIR="$1"

# 폴더 존재 여부 확인
if [ ! -d "$DIR" ]; then
  echo "폴더를 찾을 수 없습니다: $DIR"
  exit 1
fi

i=1
# 폴더 안의 파일들을 이름순 정렬 후 순회
for file in "$DIR"/*; do
  if [ -f "$file" ]; then
    ext="${file##*.}"
    newname="$DIR/$i.$ext"
    mv "$file" "$newname"
    echo "Renamed: $file → $newname"
    i=$((i+1))
  fi
done
