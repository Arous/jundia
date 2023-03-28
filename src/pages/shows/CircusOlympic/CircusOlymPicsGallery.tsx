import { useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// import photos from "@/pages/shows/CircusOlympic/useCircusOlympicPhoto";
import { loadCircusImages, breakpoints } from "./useCircusOlympicPhoto";


type Photo = {
  src: string;
  width: number;
  height: number;
  images: {
    src: string;
    width: number;
    height: number;
  }[];
}


export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
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
    };

    fetchImages();
  }, []);

  return (
      <>
          <PhotoAlbum photos={photos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

          <Lightbox
              slides={photos}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              // enable optional lightbox plugins
              plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
      </>
  );
}
