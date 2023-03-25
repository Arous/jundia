import React, { useState } from "react";


interface Props {
  src: string;
  alt: string;
  text: string;
  width: number;
  height: number;
};

const ImageWithText = ({ src, alt, text, width, height }: Props) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <img className="" src={src} alt={alt} width={width} height={height} />
      {hovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "#fff",
          }}
        >
          <span className="m-10 flex self-end">{text}</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithText;