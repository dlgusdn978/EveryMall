import React from "react";
import Image from "next/image";
import hanger from "../../public/img/hanger.jpg";
export const OrderedProduct = () => {
  // 날짜, 배송상태, 제품 사진, 제품명, 제품가격, 제품 개수, 배송 조회버튼, 교환신청, 리뷰 작성,
  return (
    <div className="border-2 rounded-md p-3">
      <div className="font-bold py-2">2024-01-28 주문</div>
      <div className="w-full border-2 rounded-md flex flex-row">
        <div className="w-3/4 p-5">
          <div className="h-1/4 py-2">
            <span className="font-bold text-xl">배송완료</span>
            <span className="font-bold text-xl text-green-500 ml-2">
              1월27일 도착
            </span>
          </div>
          <div className="h-3/4 py-2 flex flex-row">
            <div className="">
              <Image
                src={hanger}
                alt={"asdf"}
                width={"80"}
                height={"80"}
              ></Image>
            </div>
            <div className="py-2 px-5">
              <div className="text-xl font-bold">1단 행거 검은색</div>
              <div className="text-lg text-gray-500">10000원, 1개</div>
            </div>
          </div>
        </div>
        <div className="border-2"></div>
        <div className="w-1/4 p-5 [&>*]:mt-2">
          <button className="w-full py-2 border-2 rounded border-blue-500 text-blue-500">
            배송조회
          </button>
          <button className="w-full py-2 border-2 rounded">
            교환, 반품 신청
          </button>
          <button className="w-full py-2 border-2 rounded">
            리뷰 작성하기
          </button>
        </div>
      </div>
    </div>
  );
};
