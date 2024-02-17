import { GetServerSideProps } from "next";
import React from "react";
import Link from "next/link";
import { Product } from "../../components/basket/product";
import divider from "../../lib/features/feature";
import { OrderedProduct } from "../../components/mypage/product";
interface MyPageProps {
  data: any;
}

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="w-1/6 p-5 ">
        <div>
          <span className="font-bold text-xl text-orange-500">
            나의 쇼핑 활동
          </span>
        </div>
        <div className="pt-5">
          <div>
            <span>주문 내역 조회</span>
          </div>
          <div>
            <span>최근 본 상품</span>
          </div>
          <div>
            <span>내 리뷰</span>
          </div>
        </div>
      </div>
      <div className="p-5 w-full">
        <div className="mb-5">
          <span className="font-bold text-xl text-orange-500">주문목록</span>
        </div>
        <div className="">
          <OrderedProduct></OrderedProduct>
        </div>
      </div>
    </div>
  );
}
