interface ImageInfo {
  src: string;
  width: number;
  height: number;
}

export const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

// const images1 = import.meta.glob("../images/show/*")
// const images1 = import.meta.glob("/public/assets/images/show/*");

const imagesFileNames = [
    '1.png',
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
    '12.JPG',
    '13.png',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.JPG',
    '18.jpg',
    '19.png',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '27.jpg',
    '28.JPG',
    '29.JPG',
    '30.jpg',
    '31.jpg',
    '32.jpg',
    '33.jpg',
    '34.jpg',
    '35.jpg',
    '36.jpg',
    '37.jpg',
    '38.jpg',
    '39.jpg',
    '40.jpg',
    '41.jpg',
    '42.jpg',
    '43.jpg',
    '44.jpg',
    '45.jpg',
    '46.jpg',
    '47.jpg',
    '48.jpg',
]

// const imagePath = "/assets/images/show";
const imagePath = "/assets/202507/allPhotos";

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



export const loadAllPhotos2507 = async(): Promise<ImageInfo[]> => {
  console.log(images1)

  const allPhotos2507Promises = images1.map(async (path) => {
    const { width, height } = await getImageDim(path);

    return {
      src: path,
      width: width,
      height: height,
    }
  });


  const allPhotos2507 = await Promise.all(allPhotos2507Promises);

  return allPhotos2507
}