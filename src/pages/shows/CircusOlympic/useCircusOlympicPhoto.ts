interface ImageInfo {
  src: string;
  width: number;
  height: number;
}

export const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const imagesFileNames = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
  '11.jpg',
]

const imagePath = "/assets/images/Circus/Show_Olympic";

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