// import { useEffect, useState } from "react";

// import PhotoAlbum from "react-photo-album";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// // import optional lightbox plugins
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

// import {loadCircusImages, breakpoints} from "@/pages/shows/Rainbow/useRainbowPhoto";

// type Photo = {
//   src: string;
//   width: number;
//   height: number;
//   images: {
//     src: string;
//     width: number;
//     height: number;
//   }[];
// }

// export default function Gallery() {
//   const [index, setIndex] = useState(-1);
//   const [photos, setPhotos] = useState<Photo[]>([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       const images = await loadCircusImages();

//       const formattedPhotos = images.map((photo) => {
//         const width = breakpoints[1];
//         const height = (photo.height / photo.width) * width;

//         return {
//           src: photo.src,
//           width,
//           height,
//           images: breakpoints.map((breakpoint) => {
//             const height = Math.round((photo.height / photo.width) * breakpoint);

//             return {
//               src: photo.src,
//               width: breakpoint,
//               height,
//             };
//           }),
//         };
//       });

//       setPhotos(formattedPhotos);
//     };

//     fetchImages();
//   }, []);

//     return (
//         <>
//             <PhotoAlbum photos={photos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

//             <Lightbox
//                 slides={photos}
//                 open={index >= 0}
//                 index={index}
//                 close={() => setIndex(-1)}
//                 // enable optional lightbox plugins
//                 plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
//             />
//         </>
//     );
// }

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

import { breakpoints, loadAllImages } from "./useRainbowPhoto";

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
        const { a, b } = await loadAllImages();
        // Merge the two sets.
        const allImages = [...a, ...b];
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
