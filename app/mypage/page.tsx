import { GetServerSideProps } from "next";
import React from "react";
import Link from "next/link";
import { Product } from "../../components/mypage/product";
import divider from "../../lib/features/feature";
interface MyPageProps {
  data: any;
}

export default function Home() {
  return (
    <div>
      <h1>주문 목록</h1>
      <div className="border-2">
        <div>
          {/* <img></img> */}
          <span>상품명</span>
          <span>가격</span>
          <button>배송완료</button>
        </div>
      </div>
    </div>
  );
}
