import "../public/css/globals.css";
import React from "react";
import User from "../public/img/icons8-user-32.png";
import Basket from "../public/img/icons8-basket-60.png";
import ImageDiv from "../components/image";
import Link from "next/link";
import logo from "../public/img/logo.png";
import Image from "next/image";
import search from "../public/img/icons8-search-50.png";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { RootState } from "../lib/store";
import { setAuthInitState } from "../lib/features/auth/authSlice";
import { setUserInitState } from "../lib/features/user/userSlice";
const Header = () => {
  //필요 : 검색, 마이페이지, 로그인, 장바구니, 로고, 고객센터.
  const auth = useAppSelector((state: RootState) => state.auth);
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const requestLogout = () => {
    dispatch(setUserInitState());
    localStorage.removeItem("access_token");
  };
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
          <button
            className="flex items-center text-gray-500 font-normal"
            onClick={requestLogout}
          >
            로그아웃
          </button>
        )}
        <div className="flex items-center text-gray-500 font-normal">
          고객센터
        </div>
      </div>
      <div className="h-2/5 mx-5 flex justify-between items-center">
        <div className="w-1/12 m-5">
          <Link href="/">
            <Image
              width={logo.width}
              height={logo.height}
              src={logo.src}
              alt={"logo image"}
            ></Image>
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
        <div className="flex justify-between">
          <Link
            className="w-20 flex flex-col items-center cursor-pointer"
            href="/mypage"
          >
            <Image
              alt="마이페이지"
              src={User.src}
              width={28}
              height={24}
            ></Image>
            <p className="text-gray-400 font-light text-sm">마이페이지</p>
          </Link>
          <Link
            className="w-20 flex flex-col items-center cursor-pointer"
            href="/basket"
          >
            <Image
              alt="장바구니"
              src={Basket.src}
              width={28}
              height={24}
            ></Image>
            <p className="text-gray-400 font-light text-sm">장바구니</p>
          </Link>
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
