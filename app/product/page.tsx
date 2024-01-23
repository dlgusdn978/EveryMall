"use client";
import React, {
  useState,
  useEffect,
  useRef,
  MutableRefObject,
  UIEventHandler,
} from "react";
import Image from "next/image";
import prdImg from "../../public/img/hanger.jpg";
import descImg from "../../public/img/hangerDesc1.jpg";
const Product = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(125000);
  const [res, setRes] = useState(price * count);
  const previewRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const qnaRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);
  const [child, setChild] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const date = new Date()
    ?.toLocaleString("ko-KR", { timeZone: "UTC" })
    .split(". ");

  const setDivider = (price: number) => {
    return price.toLocaleString("ko-KR");
  };
  const minus = () => {
    if (count == 1) return;
    setCount(count - 1);
  };
  const plus = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setRes(count * price);
  }, [count]);
  const moveTo = (dest: string) => {
    if (
      previewRef.current &&
      descRef.current &&
      reviewRef.current &&
      qnaRef.current &&
      deliveryRef.current
    ) {
      const previewHeight = previewRef.current.scrollHeight;
      const descHeight = descRef.current.scrollHeight;
      const reviewHeight = reviewRef.current.scrollHeight;
      const qnaHeight = qnaRef.current.scrollHeight;
      if (dest === "desc") {
        window.scrollTo(0, previewHeight + 140);
      } else if (dest === "review") {
        window.scrollTo(0, previewHeight + descHeight + 140);
      } else if (dest === "qna") {
        window.scrollTo(0, previewHeight + descHeight + reviewHeight + 140);
      } else {
        window.scrollTo(
          0,
          previewHeight + descHeight + reviewHeight + qnaHeight + 140
        );
      }
    }
  };
  const scrollReview = (event: UIEventHandler) => {
    console.log(event);
  };
  const handleScroll = () => {
    if (
      previewRef.current &&
      descRef.current &&
      reviewRef.current &&
      qnaRef.current &&
      deliveryRef.current
    ) {
      // preview의 높이는 preview.current.scrollheight
      const previewHeight = previewRef.current.scrollHeight;
      const descHeight = descRef.current.scrollHeight;
      const reviewHeight = reviewRef.current.scrollHeight;
      const qnaHeight = qnaRef.current.scrollHeight;

      if (window.scrollY < previewHeight + descHeight) {
        setChild(0);
      } else if (window.scrollY < previewHeight + descHeight + reviewHeight) {
        setChild(1);
      } else if (
        window.scrollY <
        previewHeight + descHeight + reviewHeight + qnaHeight
      ) {
        setChild(2);
      } else {
        setChild(3);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(descRef.current?.clientTop);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-w-max" ref={bodyRef}>
      {/* 상품 간단정보 출력. */}
      <div
        className="mt-5 border-t-2 py-10 px-20 flex justify-around"
        ref={previewRef}
      >
        <div className="w-5/12">
          <Image alt="desc" src={prdImg.src} width={500} height={500}></Image>
        </div>
        <div className="w-5/12">
          <div className="font-bold text-3xl">
            이동식 스탠드 행거, 옷걸이 행거, 블랙
          </div>
          <div className="text-lg pb-2">별점?</div>
          <div className="mt-3 pb-2 ">
            <div className="text-2xl font-bold">
              <span className="font-bold text-4xl">{setDivider(price)}</span>
              <span className="text-2xl">원</span>
            </div>
          </div>
          {/* 할인 정보까지 넣을 것인가? */}
          <div className="text-sm py-2 font-bold text-base">
            <div className="flex">
              <span className="min-w-28">사이즈</span>
              <span className="ml-5 text-gray-500">1200*600</span>
            </div>
            <div className="flex">
              <span className="min-w-28">판매자 정보</span>
              <span className="ml-5 text-gray-500">HanuMall</span>
            </div>
          </div>
          <div className="text-sm py-2 font-bold text-base">
            <div className="flex">
              <span className="min-w-28">배송사</span>
              <span className="ml-5 text-gray-500">서울택배</span>
            </div>
            <div className="flex">
              <span className="min-w-28">배송 예정일</span>
              <span className="ml-5 text-gray-500">
                {date[0] + "-" + date[1] + "-" + date[2]}
              </span>
            </div>
          </div>
          <div className="mt-2 pt-2">
            <div></div>
            <div className="w-full h-full border-2 py-4 px-4 bg-gray-100">
              <div>이동식 스탠드 행거, 옷걸이 행거, 블랙</div>
              <div className="mt-10 flex justify-between">
                <div className="bg-white flex items-center">
                  <button
                    className="py-2 px-4 h-full border-2 font-bold text-xl text-gray-400 items-center"
                    onClick={minus}
                  >
                    -
                  </button>
                  <div className="px-4 py-1 h-full border-y-2 flex h-full items-center justify-center w-12">
                    {count}
                  </div>
                  <button
                    className="py-2 px-4 h-full border-2 font-bold text-xl text-gray-400"
                    onClick={plus}
                  >
                    +
                  </button>
                </div>
                <div className="flex text-lg items-end">
                  <span>총</span>
                  <span className="font-bold text-4xl ml-3 items-center">
                    {setDivider(res)}
                  </span>
                  <span className="text-2xl">원</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 *:py-5 *:px-10 *:border-2">
            <button className="w-1/2 bg-gray-400 font-bold text-white text-xl">
              장바구니
            </button>
            <button className="w-1/2 bg-orange-500 font-bold text-white text-xl">
              구매하기
            </button>
          </div>
        </div>
      </div>
      {/* 상품 상세정보 출력 */}
      <div className="flex justify-center bg-white items-center font-bold mt-5 border-y-2 [&>*]:py-4 sticky top-0">
        <div
          className={`w-1/4 flex justify-center ${
            child == 0 ? "bg-gray-500" : "bg-white"
          }`}
          onClick={() => moveTo("desc")}
        >
          상품상세{" "}
        </div>
        <div
          className={`w-1/4 flex justify-center ${
            child == 1 ? "bg-gray-500" : "bg-white"
          }`}
          onClick={() => moveTo("review")}
        >
          상품평
        </div>
        <div
          className={`w-1/4 flex justify-center ${
            child == 2 ? "bg-gray-500" : "bg-white"
          }`}
          onClick={() => moveTo("qna")}
        >
          상품문의
        </div>
        <div
          className={`w-1/4 flex justify-center ${
            child == 3 ? "bg-gray-500" : "bg-white"
          }`}
          onClick={() => moveTo("delivery")}
        >
          배송/교환/반품 안내
        </div>
      </div>
      <div className="flex justify-center" ref={descRef}>
        <Image
          src={descImg.src}
          alt="desc1"
          width={descImg.width}
          height={descImg.height}
        ></Image>
      </div>
      <div className="h-screen in-range:border-green-500 " ref={reviewRef}>
        {" "}
        상품평
      </div>
      <div className="h-screen" ref={qnaRef}>
        {" "}
        상품문의
      </div>
      <div className="h-screen" ref={deliveryRef}>
        {" "}
        배송/교환/반품안내
      </div>
    </div>
  );
};
export default Product;
