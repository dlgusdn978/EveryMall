"use client";
import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "../../components/input";
import { login } from "../api/user";
import { useAppSelector } from "../../lib/hooks";
type LoginProps = {
  userId: string;
  userPwd: string;
};
interface AuthState {
  accessToken: string;
  refreshToken: string;
}
const Page = () => {
  const router = useRouter();
  const useSelector = useAppSelector((state: AuthState) => state.accessToken);
  console.log(useSelector);
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const changeId = (event: ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };
  const changePwd = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPwd(event.target.value);
  };
  const userLogin = ({ userId, userPwd }: LoginProps) => {
    login({ userId, userPwd })
      .then((response) => {
        console.log("로그인 성공");
        console.log(response.data);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-9/12 m-auto">
      <div className="mt-24 mb-88 w-1/3 mx-auto">
        {/* 로그인 문구*/}
        <div className="text-4xl">로그인</div>
        {/* 아이디 비밀번호 입력란*/}
        <div className="mt-10">
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
          <div className="py-5 px-2 flex space-x-4 ">
            <input type="checkbox" value="아이디 저장" className="w-5" />
            <p className="text-gray-500">아이디 저장</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col">
            <button
              className="border-0 py-4  bg-yellow-500 text-white font-bold"
              onClick={() => {
                userLogin({ userId, userPwd });
                console.log("클릭");
              }}
            >
              로그인
            </button>
            <div className="my-5 w-11/12 m-auto flex justify-between text-gray-400">
              {/*Link로 대체*/}
              <div className="border-r-2 pr-2">아이디 찾기</div>
              <div className="border-r-2 pr-2">비밀번호 찾기</div>
              <Link href="/signup">회원가입</Link>
            </div>
            <button className="border-2 py-4">카카오 로그인</button>
            <button className="border-2 py-4">네이버 로그인</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
