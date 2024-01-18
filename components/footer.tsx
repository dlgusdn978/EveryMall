import React from "react";
import Link from "next/link";
import logo from "../public/img/logo.png";
import ImageDiv from "../components/image";
const footer = () => {
  return (
    <div className="mt-24 relative">
      {/* 회사 소개, 이용약관, 개인정보처리방침, 혜택 등. */}
      <div className="p-3 border-y-2 border-gray-300 text-gray-500">
        <div className="flex [&>*]:mx-5">
          <Link href="/">회사 소개</Link>|<Link href="/">이용약관</Link>|
          <Link href="/">개인정보처리방침</Link>|<Link href="/">혜택</Link>
        </div>
        <div></div>
      </div>
      <div className="p-3 flex flex-row justify-between">
        <div className="mx-5 [&>*]:text-gray-500">
          <div className="w-32 mt-5">
            <ImageDiv
              width={200}
              height={100}
              src={logo.src}
              alt={"logo"}
            ></ImageDiv>
          </div>
          <div>(주)HanuMall 대표이사 : OOO 사업자 등록번호 000-00-00000</div>
          <div>서울특별시 서울구 서울12로 32, HanuMall 유통판매센터</div>
          <div>통신판매업 신고 : 제 0000-서울서울-0000호</div>
          <div>개인정보보호책임자 : OOO 이메일 : OOOOO@OOOO.OOO</div>
          <div>COPYRIGHT OOO ALL RIGHT RESERVED</div>
        </div>
        <div className="mx-5 mt-5"></div>
      </div>
    </div>
  );
};

export default footer;
