"use client";
import React, { useState } from "react";
import divider from "../../lib/features/feature";
import Image from "next/image";
type ProductProps = {
  uid: string;
  pid: number;
  count: number;
  name: string;
  link: string;
  price: number;
};
export const Product = (props: ProductProps) => {
  const productProvider = "hanumall";
  const productName = "가구";
  const productPrice = 13000;
  const [productCount, setProductCount] = useState(1);
  const productTotalPrice = productPrice * productCount;
  const changeProductCount = (num: number) => {
    setProductCount(productCount + num);
  };
  return (
    <div className="flex py-2 h-32 [&>*]:flex  [&>*]:items-center">
      <div className="w-2/12 justify-center">
        <input type="checkbox" className="w-4/12 h-6 bg-orange-500" />
        <span className="w-8/12 items-center">아워홈</span>
      </div>
      <div className="w-6/12 ">
        <div className="mr-10">
          <Image
            src={props.link}
            width={100}
            height={100}
            alt={"상품 이미지"}
          ></Image>
        </div>
        <div>{props.name}</div>
      </div>
      <div className="w-1/12 justify-center">{divider(props.price)}</div>
      <div className="w-1/12 justify-center">
        <div className="flex border-y-2 font-bold text-sm">
          <div className="border-x-2 px-1">
            <input
              type="button"
              value="-"
              onClick={() => changeProductCount(-1)}
            />
          </div>
          <span className="px-3">{`${props.count}`}</span>
          <div className="border-x-2 px-1">
            <input
              type="button"
              value="+"
              onClick={() => changeProductCount(1)}
            />
          </div>
        </div>
      </div>
      <div className="w-1/12 justify-center">{`${divider(
        props.count * props.price
      )}`}</div>
      <div className="w-1/12 justify-center">
        <div className="flex-col">
          <input
            type="button"
            value="바로구매"
            className="py-1 px-2 border-orange-500 border-2 bg-orange-500 text-white "
          />
          <div className="h-2"></div>
          <input
            type="button"
            value="삭제하기"
            className=" py-1 px-2 border-gray-300 text-gray-400 border-2"
          />
        </div>
      </div>
    </div>
  );
};
