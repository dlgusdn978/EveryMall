"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { getCarouselImg } from "../app/api/product";
type CarouselProps = {
  id: string;
  link: string;
  description: string;
};
const Carousel = () => {
  const [imgList, setImgList] = useState<CarouselProps[]>([]);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      imgList && setCount((prev) => (prev + 1) % imgList.length);
    }, 7000);
    return () => {
      clearInterval(timer);
    };
  }, [imgList]);
  useEffect(() => {
    if (imgList.length == 0)
      getCarouselImg().then((response) => {
        setImgList(response.data.imgs);
      });
  }, []);
  return (
    <div className="relative m-auto h-96 flex">
      <div>
        {imgList &&
          imgList.map((value: CarouselProps, index: number) => (
            <Image
              alt="carouselImg"
              key={index}
              src={value.link}
              width={1700}
              height={500}
              className={`object-cover object-center h-96 overflow-hidden 
                ${index == count ? "block" : "hidden"}
                `}
            ></Image>
          ))}
        <div className="absolute w-56  top-16 right-48 z-10 bg-white rounded-sm shadow-2xl ">
          <ul className="[&>*]:border-b-2  [&>*]:px-5 [&>*]:py-5 last:border-0 font-bold text-gray-500 cursor-pointer">
            {imgList &&
              imgList.map(
                (
                  value: CarouselProps,
                  index: number,
                  array: CarouselProps[]
                ) => (
                  <li
                    key={index}
                    className={`${
                      count == index ? "border-2 border-blue-500" : ""
                    }`}
                    onClick={() => {
                      setCount(index);
                    }}
                  >
                    {value.description}
                  </li>
                )
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
