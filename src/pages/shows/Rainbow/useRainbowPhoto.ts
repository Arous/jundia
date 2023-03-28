interface ImageInfo {
  src: string;
  width: number;
  height: number;
}

export const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const images = import.meta.glob("../../../assets/images/Circus/Show_Rainbow/*")

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
  let circusImages: ImageInfo[] = [];
  for (const path in images) {
    const absPath = path.replace('../../../', '/src/');

    const { width, height } = await getImageDim(absPath);

    circusImages.push({
      src: absPath,
      width: width,
      height: height,
    });
  }

  return circusImages;
}