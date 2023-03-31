import React, { useEffect, useState, useCallback } from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { loadCircusImages, breakpoints } from "@/assets/data/circusPhotos";

// type Photo = {
//   src: string;
//   width: number;
//   height: number;
//   images: {
//     src: string;
//     width: number;
//     height: number;
//   }[];
// };

type ImageProp = {
  src: string;
  width: number;
  height: number;
}

const LazyImage = React.memo(({ src, width, height, }: ImageProp) => {
  const [loadedSrc, setLoadedSrc] = useState("");

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = src;
    imageLoader.onload = () => {
      setLoadedSrc(src);
    };
  }, [src]);

  return (
    <img src={loadedSrc || "/placeholder-image.jpg"} width={width} height={height} alt={''} />
  );
});

export default function AllPhotos() {
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState<ImageProp[]>([]);

  const fetchImages = useCallback(async () => {
    const images = await loadCircusImages();

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
        // renderPhoto={( {photo } ) => (
        //   <LazyImage
        //     src={photo.src}
        //     width={photo.width}
        //     height={photo.height}
        //   />
        // )}
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
