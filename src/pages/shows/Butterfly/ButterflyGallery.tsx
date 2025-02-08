import { useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { breakpoints, loadAllImages } from "./useButterflyPhoto";

type Photo = {
  src: string;
  width: number;
  height: number;
  images: {
    src: string;
    width: number;
    height: number;
  }[];
};

/**
 * Helper function to convert a raw image (with known dimensions)
 * into a formatted photo object that includes responsive image variants.
 */
const formatPhoto = (img: {
  src: string;
  width: number;
  height: number;
}): Photo => {
  // Use the second breakpoint as the default width.
  const defaultWidth = breakpoints[1];
  const defaultHeight = (img.height / img.width) * defaultWidth;

  const responsiveVariants = breakpoints.map((bp) => {
    const variantHeight = Math.round((img.height / img.width) * bp);
    return {
      src: img.src,
      width: bp,
      height: variantHeight,
    };
  });

  return {
    src: img.src,
    width: defaultWidth,
    height: defaultHeight,
    images: responsiveVariants,
  };
};

export default function Gallery() {
  // State to control the index of the open slide in the lightbox.
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  // Gallery photos formatted for PhotoAlbum and Lightbox.
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadGalleryImages = async () => {
      try {
        // Load both image sets concurrently.
        const { circus, butterfly } = await loadAllImages();
        // Merge the two sets.
        const allImages = [...circus, ...butterfly];
        // Format each image to include responsive variants.
        const formattedPhotos = allImages.map(formatPhoto);
        setPhotos(formattedPhotos);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    loadGalleryImages();
  }, []);

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setLightboxIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
