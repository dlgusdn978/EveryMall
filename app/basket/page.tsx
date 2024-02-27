"use client";
import React, { useState, useEffect } from "react";
import { Product } from "../../components/basket/product";
import divider from "../../lib/features/feature";
import { getBasketProduct } from "../api/basket";
import { useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";
import { useRouter } from "next/navigation";
type ProductProps = {
  uid: string;
  pid: number;
  count: number;
  name: string;
  link: string;
  price: number;
};
const Basket = () => {
  const userId = useAppSelector((state: RootState) => state.user.user_id);
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryPrice = 3000;
  // TODO : get basket list;
  const [basketList, setBasketList] = useState<ProductProps[]>([]);
  useEffect(() => {
    userId &&
      getBasketProduct(userId).then((response) => {
        console.log(response.data.getProduct);
        setBasketList(response.data.getProduct);
        setTotalPrice(getTotalPrice(response.data.getProduct));
      });
  }, [userId]);

  const getTotalPrice = (props: ProductProps[]) => {
    let price = 0;
    props.map((item) => {
      price += item.price * item.count;
    });
    return price;
  };
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

        <div>
          {basketList.map((item, index) => (
            <Product {...item} key={index}></Product>
          ))}
        </div>

        {/* <Product></Product> */}
        <div className="flex px-36 m-auto py-5 [&>*]:flex [&>*]:justify-center bg-gray-100">
          <div className="flex items-end w-1/3">
            <span className="text-sm">총 금액 </span>
            <span className="font-bold text-xl ml-3">
              {`${divider(totalPrice)}`}원
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
              {`${divider(totalPrice + deliveryPrice)}`}원
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
            onClick={() => {
              router.push("/checkout");
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Basket;
