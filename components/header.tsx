import "../public/css/globals.css";
import React from "react";
import User from "../public/img/icons8-user-32.png";
import Basket from "../public/img/icons8-basket-60.png";
import ImageDiv from "../components/image";
import Link from "next/link";
import logo from "../public/img/logo.png";
import Image from "next/image";
import search from "../public/img/icons8-search-50.png";
import { useAppSelector } from "../lib/hooks";
import { RootState } from "../lib/store";
const Header = () => {
  //필요 : 검색, 마이페이지, 로그인, 장바구니, 로고, 고객센터.
  const auth = useAppSelector((state: RootState) => state.auth);
  const user = useAppSelector((state: RootState) => state.user);
  return (
    <div className="h-48">
      <div className="h-1/5 flex space-x-4 justify-end">
        {user.user_id === "" ? (
          <Link
            href="/login"
            className="flex items-center text-gray-500 font-normal"
          >
            로그인/회원가입
          </Link>
        ) : (
          <Link
            href="/mypage"
            className="flex items-center text-gray-500 font-normal"
          >
            마이페이지
          </Link>
        )}
        <div className="flex items-center text-gray-500 font-normal">
          고객센터
        </div>
      </div>
      <div className="h-2/5 mx-5 flex justify-between items-center">
        <div className="w-1/12 m-5">
          <Link href="/">
            <ImageDiv
              width={logo.width}
              height={logo.height}
              src={logo.src}
              alt={"logo image"}
            ></ImageDiv>
          </Link>
        </div>
        <div className="ml-5 w-8/12">
          {/* 검색 */}
          <input
            type="text"
            className="border-4 border-orange-500 rounded-md w-11/12 p-2 focus:outline-none pl-4"
          />
          <button className="relative right-10 top-2">
            <Image src={search.src} width={30} height={30} alt="search"></Image>
          </button>
        </div>
        <div className="flex justify-between w-1/12">
          <div>
            <Link href="/mypage">
              <ImageDiv
                width={20}
                height={24}
                src={User.src}
                alt="user"
                desc="마이페이지"
              />
            </Link>
          </div>
          <div>
            <Link href="/basket">
              <ImageDiv
                width={20}
                height={24}
                src={Basket.src}
                alt="basket"
                desc="장바구니"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-2/5 flex [&>*]:h-full">
        <div className="flex justify-center border-r-2 items-center w-2/12 cursor-pointer bg-orange-500">
          <div className="flex-col items-center justify-center mr-2">
            <div className="h-2/3 m-auto">
              <div className="bg-white w-6 h-0.5 mt-1 rounded-md"></div>
              <div className="bg-white w-6 h-0.5 mt-2 mb-2 rounded-md"></div>
              <div className="bg-white w-6 h-0.5 rounded-md"></div>
            </div>
          </div>
          <span className="font-bold text-lg items-center text-white">
            전체 카테고리
          </span>
        </div>
        <div className="w-1/12 flex justify-center items-center cursor-pointer ml-4">
          <span className="font-bold text-xl">베스트</span>
        </div>
        <div className="w-1/12 flex justify-center items-center cursor-pointer">
          <span className="font-bold text-xl">핫딜</span>
        </div>
        <div className="w-1/12 flex justify-center items-center cursor-pointer">
          <span className="font-bold text-xl">기획전</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
