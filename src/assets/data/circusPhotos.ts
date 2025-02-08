interface ImageInfo {
  src: string;
  width: number;
  height: number;
}

export const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

// const images1 = import.meta.glob("../images/show/*")
// const images1 = import.meta.glob("/public/assets/images/show/*");

const imagesFileNames = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg',
    'img13.jpg',
    'img14.jpg',
    'img15.jpg',
    'img16.jpg',
    'img17.jpg',
    'img18.jpg',
    'img19.jpg',
    'img20.jpg',
    'img21.jpg',
    'img22.png',
    'img23.jpg',
    'img24.jpg',
    'img25.jpg',
    'img26.jpg',
    'img27.jpg',
    'img28.jpg',
    'img29.jpg',
    'img30.jpg',
    'img31.jpg',
    'img32.jpg',
    'img33.jpg',
    'img34.jpg',
    'img35.jpg',
    'img36.jpg',
    'img37.jpg',
]

// const imagePath = "/assets/images/show";
const imagePath = "/assets/images_compressed/show";

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