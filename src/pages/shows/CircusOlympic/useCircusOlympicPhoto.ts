interface ImageInfo {
  src: string;
  width: number;
  height: number;
}

export const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const imagesFileNames = [
    'circus_games2.jpeg',
    'circus_games3.jpeg',
    'circus_games4.jpeg',
    'circus_games5.jpeg',
    'circus_games6.jpeg',
    'circus_games7.jpeg',
    'circus_games8.jpeg',
    'circus_games9.jpeg',
    'circus_games10.jpeg',
    'circus_games11.jpeg',
]

const imagePath = "/assets/v2025/circus_games";

const images1 = imagesFileNames.map((fileName) => {
  return `${imagePath}/${fileName}`
});


const getImageDim = (url: string): Promise<{width: number, height: number}> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({
      width: img.width,
      height: img.height,
    });
    img.onerror = (error) => reject(error);
    img.src = url;
  });
};


export const loadCircusImages = async(): Promise<ImageInfo[]> => {
  console.log(images1)

  const circusImagesPromises = images1.map(async (path) => {
    const { width, height } = await getImageDim(path);

    return {
      src: path,
      width: width,
      height: height,
    }
  });


  const circusImages = await Promise.all(circusImagesPromises);

  return circusImages
}
