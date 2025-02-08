// interface ImageInfo {
//   src: string;
//   width: number;
//   height: number;
// }

// export const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

// const imagesFileNames = [
//   '0.png', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.png',
// ]

// const imagePath = "/assets/images_compressed/Circus/Show_Classic";

// const images1 = imagesFileNames.map((fileName) => {
//   return `${imagePath}/${fileName}`
// });


// const getImageDim = (url: string): Promise<{width: number, height: number}> => {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.onload = () => resolve({
//       width: img.width,
//       height: img.height,
//     });
//     img.onerror = (error) => reject(error);
//     img.src = url;
//   });
// };


// export const loadCircusImages = async(): Promise<ImageInfo[]> => {
//   console.log(images1)

//   const circusImagesPromises = images1.map(async (path) => {
//     const { width, height } = await getImageDim(path);

//     return {
//       src: path,
//       width: width,
//       height: height,
//     }
//   });


//   const circusImages = await Promise.all(circusImagesPromises);

//   return circusImages
// }


interface ImageInfo {
  src: string;
  width: number;
  height: number;
}

export const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];


const IMAGE_PATHS = {
    classicA: "/assets/images_compressed/Circus/Show_Classic",
    classicB: "/assets/v2025/circus_classic",
};

const FILENAMES = {
    classicA: ['0.png', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.png'],
    classicB: [
        "circus_classic6.jpeg",
        "circus_classic7.jpeg",
        "circus_classic8.JPG",
        "circus_classic12.jpeg",
        "circus_classic13.jpeg",
        "circus_classic14.jpeg",
        "circus_classic15.jpeg",
        "circus_classic16.jpeg",
        "circus_classic17.jpeg",
        "circus_classic18.jpeg",
        "circus_classic19.jpeg",
        "circus_classic20.JPG",
    ],
};

/**
     * Loads an image from a URL and resolves with its dimensions.
    */
const getImageDimensions = (url: string): Promise<{ width: number; height: number }> =>
    new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = (error) => reject(error);
    img.src = url;
});

/**
 * Fetches the image information (source URL and dimensions) for a single image.
 */
const fetchImageInfo = async (url: string): Promise<ImageInfo> => {
    const { width, height } = await getImageDimensions(url);
    return { src: url, width, height };
};

/**
 * Loads a set of images given a base path and an array of filenames.
 * Returns a Promise that resolves with an array of ImageInfo objects.
 */
const loadImages = (basePath: string, filenames: string[]): Promise<ImageInfo[]> => {
    const urls = filenames.map(filename => `${basePath}/${filename}`);
    return Promise.all(urls.map(fetchImageInfo));
};

/**
 * Loads both the "circus" and "butterfly" image sets concurrently.
 * Returns a Promise that resolves with an object containing both orders.
 */
export const loadAllImages = (): Promise<{
    classicA: ImageInfo[];
    classicB: ImageInfo[];
}> =>
    Promise.all([
        loadImages(IMAGE_PATHS.classicA, FILENAMES.classicA),
        loadImages(IMAGE_PATHS.classicB, FILENAMES.classicB),
    ]).then(([classicA, classicB]) => ({ classicA, classicB }));
