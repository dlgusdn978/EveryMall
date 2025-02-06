"use client";
import React, { useEffect, useState, lazy } from "react";
import "../public/css/globals.css";
import Carousel from "../components/carousel";
import Preview from "../components/product/preview";
import { getMainProduct } from "./api/product";
type MainProductProps = {
  id: number;
  name: string;
  link: string;
  price: number;
  inventory: number;
  category: string;
  sales_rate: number;
  star_rate: number;
};
const MarkdownPreview = lazy(() => import("../components/product/preview"));
export default function Page() {
  const [mainProduct, setMainProduct] = useState<MainProductProps[]>();
  const [preview, setPreview] = useState(false);
  useEffect(() => {
    // 페이지 로딩 시 기본 아이템들 로딩
    getMainProduct().then((response) => {
      setMainProduct(response.data.mainProduct);
      console.log(response);
      console.log(response.data.mainProduct[0].id);
    });
  }, []);
  const setTrue = () => {
    setPreview(true);
  };
  return (
    <main className="w-full">
      <Carousel></Carousel>
      <div className="w-full pt-5">
        <button onClick={setTrue}>{"Asdf"}</button>
        <span className=" font-bold text-2xl  text-orange-500">
          {"오늘의 발견"}
        </span>
        <div className="grid grid-cols-4 flex flex-between p-3">
          {/* product area */}
          {/* id, name, price, star_rate */}

          {mainProduct &&
            mainProduct.map((item, index) => (
              <MarkdownPreview {...item} key={index}></MarkdownPreview>
            ))}
        </div>
      </div>
    </main>
  );
}
