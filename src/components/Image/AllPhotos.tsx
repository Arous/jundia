import React, { useCallback, useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import { loadCircusImages as allImages } from "@/assets/data/circusPhotos";
import { loadAllImages as butterflyImages } from "@/pages/shows/Butterfly/useButterflyPhoto";
import {
  breakpoints,
  loadAllImages,
} from "@/pages/shows/CircusClassic/useCircusClassicPhoto";
import { loadCircusImages as gamesImages } from "@/pages/shows/CircusOlympic/useCircusOlympicPhoto";
import { loadAllImages as rainbowImages } from "@/pages/shows/Rainbow/useRainbowPhoto";
import { loadCircusImages as waveImages } from "@/pages/shows/Wave/useWavePhoto";

type ImageProp = {
  src: string;
  width: number;
  height: number;
};

const LazyImage = React.memo(({ src, width, height }: ImageProp) => {
  const [loadedSrc, setLoadedSrc] = useState("");

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = src;
    imageLoader.onload = () => {
      setLoadedSrc(src);
    };
  }, [src]);

  return (
    <img
      src={loadedSrc || "/placeholder-image.jpg"}
      width={width}
      height={height}
      alt={""}
    />
  );
});

export default function AllPhotos() {
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState<ImageProp[]>([]);

  const fetchImages = useCallback(async () => {
    const allImgs = await allImages();
    const { classicA, classicB } = await loadAllImages();
    const { circus, butterfly } = await butterflyImages();
    const gamesImgs = await gamesImages();
    const { a, b } = await rainbowImages();
    const waveImgs = await waveImages();

    const images = [
      ...allImgs,
      ...classicA,
      ...classicB,
      ...circus,
      ...butterfly,
      ...gamesImgs,
      ...a,
      ...b,
      ...waveImgs,
    ];

    const formattedPhotos = images.map((photo) => {
      const width = breakpoints[1];
      const height = (photo.height / photo.width) * width;

      return {
        src: photo.src,
        width,
        height,
        images: breakpoints.map((breakpoint) => {
          const height = Math.round((photo.height / photo.width) * breakpoint);

          return {
            src: photo.src,
            width: breakpoint,
            height,
          };
        }),
      };
    });

    setPhotos(formattedPhotos);
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
