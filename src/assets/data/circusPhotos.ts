interface ImageInfo {
  src: string;
  width: number;
  height: number;
}

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const images1 = import.meta.glob("../images/show/*")

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


let circusImages: ImageInfo[] = [];
for (const path in images1) {
  const absPath = path.replace('..', '/src/assets')

  const {width, height} = await getImageDim(absPath);

  circusImages.push({
    src: absPath,
    width: width,
    height: height 
  });

}

const photos = circusImages.map((photo) => {
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

export default photos;


