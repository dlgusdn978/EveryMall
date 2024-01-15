import React from "react";
import Link from "next/link";
import "../public/css/globals.css";
import Carousel from "../components/carousel";
export default function Page() {
  return (
    <main>
      메인 페이지의 내용 작성
      <Carousel></Carousel>
      <div className="w-9/12 m-auto"> 메인 컨텐츠 영역</div>
    </main>
  );
}
