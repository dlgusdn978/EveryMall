import "../public/css/globals.css";
import React from "react";
import User from "../public/img/icons8-user-32.png";
import Basket from "../public/img/icons8-basket-60.png";
import ImageDiv from "../components/image";
import Link from "next/link";
const Header = () => {
  //필요 : 검색, 마이페이지, 로그인, 장바구니, 로고, 고객센터.
  return (
    <div className="w-10/12 m-auto h-24">
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
      <div className="h-3/5 flex justify-between items-center">
        <div className="w-1/12">
          <div className="flex justify-center">logo</div>
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
              width={32}
              height={32}
              src={User.src}
              alt="user"
              desc="마이페이지"
            />
          </Link>

          <ImageDiv
            width={32}
            height={32}
            src={Basket.src}
            alt="basket"
            desc="장바구니"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
