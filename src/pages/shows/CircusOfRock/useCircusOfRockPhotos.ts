interface ImageInfo {
  src: string;
  width: number;
  height: number;
}

export const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const imagesFileNames = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
  '17.jpg',
  '18.jpg',
  '19.jpg',
  '20.jpg',
  '21.jpg',
  '22.jpg',
  '23.jpg',
  '24.jpg',
  '25.jpg',
  '26.jpg',
  '27.jpg',
  '28.jpg',
  '29.jpg',
  '30.jpg',
  '31.jpg',
  '32.jpg',
  '33.jpg',
  '34.jpg',
  '35.jpg',
  '36.jpg',
  '37.jpg',
]

const imagePath = "/assets/202507/circus_of_rock/photos";

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


export const loadCircusOfRockImages = async(): Promise<ImageInfo[]> => {
  console.log(images1)

  const circusOfRockPromises = images1.map(async (path) => {
    const { width, height } = await getImageDim(path);

    return {
      src: path,
      width: width,
      height: height,
    }
  });


  const circusOfRockImages = await Promise.all(circusOfRockPromises);

  return circusOfRockImages
}