"use client";
import React, { useEffect } from "react";
import "../public/css/globals.css";
import Carousel from "../components/carousel";
import Preview from "../components/product/preview";

export default function Page() {
  return (
    <main className="max-w-min">
      <Carousel></Carousel>
      <div className="min-w-max m-auto">
        {" "}
        메인 컨텐츠 영역
        <div>desc area</div>
        <div className="border-2 grid grid-cols-4 flex flex-between p-3">
          {/* product area */}
          <Preview></Preview>
          <Preview></Preview>
          <Preview></Preview>
          <Preview></Preview>
          <Preview></Preview>
          <Preview></Preview>
          <Preview></Preview>
          <Preview></Preview>
          <Preview></Preview>
        </div>
      </div>
    </main>
  );
}
