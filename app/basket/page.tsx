"use client";
import React, { useEffect } from "react";
import { Product } from "../../components/basket/product";
import divider from "../../lib/features/feature";
import { getBasketProduct } from "../api/basket";
import { useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";
const Basket = () => {
  const userId = useAppSelector((state: RootState) => state.user.user_id);
  const price = 10000;
  const deliveryPrice = 3000;
  const totalPrice = price + deliveryPrice;
  // TODO : get basket list;
  useEffect(() => {
    userId &&
      getBasketProduct(userId).then((response) => console.log(response.data));
  }, [userId]);
  return (
    <div>
      <div className="p-5 font-bold text-xl">
        <h4>일반 배송</h4>
      </div>
      <div className="border-y-2">
        {/* 상품 리스트 */}
        <div className="flex [&>*]:py-5 [&>*]:flex [&>*]:justify-center bg-gray-100">
          <div className="w-2/12">
            <span>브랜드</span>
          </div>
          <div className="w-6/12">
            <span>상품명</span>
          </div>
          <div className="w-1/12">
            <span>구매가</span>
          </div>
          <div className="w-1/12">
            <span>수량</span>
          </div>
          <div className="w-1/12">
            <span>금액</span>
          </div>
          <div className="w-1/12">
            <span>선택</span>
          </div>
        </div>
        <Product></Product>
        <div className="flex px-36 m-auto py-5 [&>*]:flex [&>*]:justify-center bg-gray-100">
          <div className="flex items-end w-1/3">
            <span className="text-sm">총 금액 </span>
            <span className="font-bold text-xl ml-3">
              {`${divider(price)}`}원
            </span>
          </div>
          +
          <div className="flex items-end w-1/3">
            <span className="text-sm">배송비 </span>
            <span className="font-bold text-xl  ml-3">
              {`${divider(deliveryPrice)}`}원
            </span>
          </div>
          =
          <div className="flex items-end w-1/3">
            <span className="text-sm">결제 금액</span>
            <span className="font-bold text-xl  ml-3">
              {`${divider(totalPrice)}`}원
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-end [&>*]:ml-4">
          <input
            type="button"
            value="선택상품 구매"
            className="py-4 px-7 border-2 border-gray-300 bg-gray-300 font-bold text-white text-xl"
          />

          <input
            type="button"
            value="전체상품 구매"
            className="py-4 px-7 border-2 border-orange-500 bg-orange-500 font-bold text-white text-xl"
          />
        </div>
      </div>
    </div>
  );
};
export default Basket;
