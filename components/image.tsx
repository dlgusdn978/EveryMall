import React from "react";
import Image, { StaticImageData } from "next/image";

interface ImageProps {
  width: number;
  height: number;
  src: String;
  alt: String;
  desc?: String;
}
const ImageDiv = (props: ImageProps) => {
  return (
    <div
      className={`hover flex flex-col justify-center items-center w-${props.width} h-${props.height}`}
    >
      <Image
        width={`${props.width}`}
        height={`${props.height}`}
        src={`${props.src}`}
        alt={`${props.alt}`}
      ></Image>
      <div className="text-xs mt-1 color-gray-100 text-slate-400 font-bold">
        {props.desc}
      </div>
    </div>
  );
};

export default ImageDiv;
