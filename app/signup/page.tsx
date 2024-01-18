"use client";
import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "../../components/input";
import { signUp } from "../api/user";
import SignupCheckbox from "../../components/signup/signupCheckbox";
type UserProps = {
  userId: string;
  userPwd: string;
  userName: string;
  userPhone: string;
};
const SignUp = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userPwdCheck, setUserPwdCheck] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  {
    /* 리팩토링 할 것 */
  }
  const changeId = (event: ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };
  const changePwd = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPwd(event.target.value);
  };
  const changePwdCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPwdCheck(event.target.value);
  };
  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const changePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPhone(event.target.value);
  };
  const signUpCheck = () => {
    if (!userId || !userPwd || !userPwdCheck || !userName || !userPhone) {
      alert("회원가입 실패");
      return;
    }
    {
      /* todo : 유저 아이디 중복 체크 기능 넣기*/
    }
    if (userPwd !== userPwdCheck) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    {
      /* todo : 연락처 정규표현식 넣기 */
    }
    signUp({ userId, userPwd, userName, userPhone })
      .then(() => {
        console.log("asdfasfdsfa");
        router.push("/login");
      })
      .catch(() => {
        alert("입력 값 수정 필요");
      });
  };
  return (
    <div className="w-9/12 m-auto">
      <div className="mt-24 mb-88 w-1/3 mx-auto">
        {/* 로그인 문구*/}
        <div className="text-4xl">회원가입</div>
        {/* 아이디 비밀번호 입력란*/}
        <div className="my-10">
          <Input
            placeholder="아이디"
            value={userId}
            onChange={changeId}
          ></Input>
          <Input
            placeholder="비밀번호"
            value={userPwd}
            onChange={changePwd}
          ></Input>
          <Input
            placeholder="비밀번호 확인"
            value={userPwdCheck}
            onChange={changePwdCheck}
          ></Input>
          <Input
            placeholder="이름"
            value={userName}
            onChange={changeName}
          ></Input>
          <Input
            placeholder="휴대폰 번호"
            value={userPhone}
            onChange={changePhone}
          ></Input>
        </div>
        <div className="">
          <div className="my-10"></div>
          <div className="flex flex-col">
            {/* <form method="POST" action="/signup"> */}
            <div className="border-2 border-gray-300"></div>
            {/* </form> */}
            <SignupCheckbox />
            <button
              className="border-0 py-4  bg-yellow-500 text-white font-bold"
              onClick={signUpCheck}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
