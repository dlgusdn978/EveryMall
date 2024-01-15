import "../public/css/globals.css";
import React from "react";
import User from "../public/img/icons8-user-32.png";
import Basket from "../public/img/icons8-basket-60.png";
import ImageDiv from "../components/image";
import Link from "next/link";
import logo from "../public/img/logo.png";
const Header = () => {
  //필요 : 검색, 마이페이지, 로그인, 장바구니, 로고, 고객센터.
  return (
    <div className="w-9/12 m-auto h-24">
      <div className="h-2/5 flex space-x-4 justify-end">
        <Link
          href="/login"
          className="flex items-center text-gray-500 font-normal"
        >
          로그인/회원가입
        </Link>
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
            className="border-4 border-yellow-500 rounded-md w-11/12 p-2 focus:outline-none"
          />
          <button className="border-2">asdf</button>
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
