"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ImageDiv from "../image";
import Image from "next/image";
import star from "../../public/img/star.png";
import StarRate from "./starRate";
import setDivider from "../../lib/features/feature";
type PreviewProps = {
  id: number;
  name: string;
  link: string;
  price: number;
  star_rate: number;
};
const Preview = ({ id, name, link, price, star_rate }: PreviewProps) => {
  const router = useRouter();
  return (
    <div
      className="p-3 m-3 border-2"
      onClick={() => {
        router.push(`/product/${id}`);
      }}
    >
      <ImageDiv alt={"alt"} height={300} width={300} src={link}></ImageDiv>
      <div className="m-4 m-auto w-full flex flex-col justify-between">
        <div className="font-bold text-gray-600 mt-0 mt-2">
          <span>{name}</span>
        </div>

        <div className="b-0 w-full">
          <div className="font-bold text-red-600 text-lg mt-2">
            {setDivider(price)}원
          </div>
          <div className="w-max h-max flex">
            <StarRate star_rate={star_rate}></StarRate>
            <span className="text-xs">({star_rate})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
