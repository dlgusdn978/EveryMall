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

  return (
    <div className="h-24">
      <div className="h-2/5 flex space-x-4 justify-end">
        {auth.access_token === "" ? (
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
            {auth.expiration_time.toString()}
          </Link>
        )}
        <div className="flex items-center text-gray-500 font-normal">
          고객센터
        </div>
      </div>
      <div className="h-3/5 mx-5 flex justify-between items-center">
        <div className="w-24 m-5">
          <Link href="/">
            <ImageDiv
              width={logo.width}
              height={logo.height}
              src={logo.src}
              alt={"logo image"}
            ></ImageDiv>
          </Link>
        </div>
        <div className="w-3/4">
          {/* 검색 */}
          <input
            type="text"
            className="border-4 border-yellow-500 rounded-md w-11/12 p-2 focus:outline-none pl-4"
          />
          <button className="relative right-10 top-2">
            <Image src={search.src} width={30} height={30} alt="search"></Image>
          </button>
        </div>
        <div className="flex space-x-4">
          <Link href="/mypage">
            <ImageDiv
              width={28}
              height={32}
              src={User.src}
              alt="user"
              desc="마이페이지"
            />
          </Link>

          <Link href="/basket">
            <ImageDiv
              width={28}
              height={32}
              src={Basket.src}
              alt="basket"
              desc="장바구니"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
