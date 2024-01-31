"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ImageDiv from "../image";
import hanger from "../../public/img/hanger.jpg";
type PreviewProps = {
  id: number;
  name: string;
  price: number;
  star_rate: number;
};
const Preview = ({ id, name, price, star_rate }: PreviewProps) => {
  const router = useRouter();
  return (
    <div
      className="p-3 m-3 border-2"
      onClick={() => {
        router.push(`/product/${id}`);
      }}
    >
      <ImageDiv
        alt={"alt"}
        height={300}
        width={300}
        src={hanger.src}
      ></ImageDiv>
      <div className="m-4 m-auto [&>*]:mt-3">
        <div className="font-bold text-gray-600">
          <span>{name}</span>
        </div>
        <div className="font-bold text-red-600 text-lg">{price}원</div>
        <div>{star_rate}</div>
      </div>
    </div>
  );
};

export default Preview;
