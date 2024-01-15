"use client";
import React, { useState } from "react";
import Link from "next/link";
import Input from "../../components/input";
import Checkbox from "../../components/checkbox";
import { signUp } from "../api/user";
const SignUp = () => {
  const [allChecked, isAllChecked] = useState(false);
  const setAllChecked = () => {
    isAllChecked(!allChecked);
  };
  return (
    <div className="w-9/12 m-auto">
      <div className="mt-44 mb-88 w-80 mx-auto">
        {/* 로그인 문구*/}
        <div className="text-4xl">회원가입</div>
        {/* 아이디 비밀번호 입력란*/}
        <div className="my-10">
          <Input placeholder="아이디"></Input>
          <Input placeholder="비밀번호"></Input>
          <Input placeholder="비밀번호 확인"></Input>
          <Input placeholder="이름"></Input>
          <Input placeholder="휴대폰 번호"></Input>
        </div>
        <div className="">
          <div className="my-10"></div>
          <div className="flex flex-col">
            {/* <form method="POST" action="/signup"> */}
            <button
              className="border-0 py-4  bg-yellow-500 text-white font-bold"
              onClick={signUp}
            >
              회원가입
            </button>
            {/* </form> */}

            <div className="my-5 w-11/12 m-auto flex justify-between text-gray-400">
              {/*Link로 대체*/}
              <Checkbox
                checked={allChecked}
                disabled={false}
                onChange={setAllChecked}
              >
                모두 동의합니다.
              </Checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
