"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import carousel1 from "../public/img/carousel1.jpg";
import beauty from "../public/img/beauty.jpg";
import coupon from "../public/img/coupon.jpg";
import sales from "../public/img/sales.jpg";
type CarouselProps = {
  Image: StaticImageData;
  desc: string;
};
const Carousel = () => {
  const carouselImg = [carousel1, beauty, coupon, sales];
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev + 1) % carouselImg.length);
    }, 7000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="relative m-auto h-96 mt-5 flex">
      <div>
        <Image
          alt="carouselImg"
          src={carouselImg[count].src}
          width={carouselImg[count].width}
          height={carouselImg[count].height}
          className="object-cover object-center h-96 overflow-hidden "
        ></Image>
        <div className="absolute w-56  top-16 right-48 z-10 bg-white rounded-sm shadow-2xl ">
          <ul className="[&>*]:border-b-2  [&>*]:px-5 [&>*]:py-5 last:border-0 font-bold text-gray-500">
            <li
              className={`${count == 0 ? "border-2 border-blue-500" : ""}`}
              onClick={() => {
                setCount(0);
              }}
            >
              갤럭시 사전구매
            </li>
            <li
              className={`${count == 1 ? "border-2 border-blue-500" : ""}`}
              onClick={() => {
                setCount(1);
              }}
            >
              이니스프리
            </li>
            <li
              className={`${count == 2 ? "border-2 border-blue-500" : ""}`}
              onClick={() => {
                setCount(2);
              }}
            >
              구매 쿠폰
            </li>
            <li
              className={`${count == 3 ? "border-2 border-blue-500" : ""}`}
              onClick={() => {
                setCount(3);
              }}
            >
              설 한정 판매
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
