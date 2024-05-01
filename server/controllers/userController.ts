import { NextFunction, Request, Response } from "express";
import { cookies } from "next/headers";
import { parse } from "cookie";

const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

// const asyncHandler = require("express-async-handler");
require("dotenv").config();

type ReturnProps = {
  success: boolean;
  message: string;
};
interface SignUpProps {
  userId: string;
  userPwd: string;
  userName: string;
  userPhone: string;
}
const jwtSecret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
export const verifyAccessToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.headers["authorization"];
  if (!authorizationHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authorizationHeader.split(" ")[1]; // Bearer {token} 구조로 되어 있으므로 분리

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded; // 유저 정보 저장 (예: userId)
    next(); // 다음 미들웨어로 진행
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
const getLogin = asyncHandler(async (req: Request, res: Response) => {
  const body: any = req.body;
  const user: any = await User.login(body);
  console.log(user[0]);
  if (!user) {
    console.log("유저 없을 때");
    res.json({ status: 400, message: "Cannot found user" });
  }

  const compareRes = await bcrypt.compare(body.userPwd, user[0].password);
  if (!compareRes) {
    console.log("비밀번호 다를 때");
    res.json({ status: 400, message: "Incorrect password error" });
  }
  const access_token = jwt.sign({ id: body.userId }, jwtSecret);
  const refresh_token = jwt.sign({ id: body.userId }, jwtSecret, {
    expiresIn: "1d",
  });

  res.setHeader(
    "Set-Cookie",
    `refresh_token=${refresh_token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict; Secure`
  );
  res.json({ status: 200, message: "login success", access_token });
});
const getSignUp = asyncHandler(async (req: Request, res: Response) => {
  const data: any = req.body;
  console.log(data);
  const hashedPwd = await bcrypt.hash(data.userPwd, 10);
  const signUpInfo: SignUpProps = {
    userId: data.userId,
    userPwd: hashedPwd,
    userName: data.userName,
    userPhone: data.userPhone,
  };
  const user = await User.regist(signUpInfo);
  return res.json();
});
const reissue = asyncHandler(async (req: Request, res: Response) => {
  const cookies = parse(req.headers.cookie || ""); // 쿠키 파싱
  const refresh_token = cookies["refresh_token"]; // refresh_token 가져오기

  if (!refresh_token) {
    return res
      .status(401)
      .json({ status: 401, message: "No refresh token found" });
  }

  try {
    const verified = jwt.verify(refresh_token, jwtSecret);
    const checker = await User.login(verified.userId);

    if (checker) {
      const new_access_token = jwt.sign({ id: verified.userId }, jwtSecret);
      res.json({
        status: 200,
        message: "reissue token success",
        new_access_token,
      });
    } else {
      res.status(401).json({ status: 401, message: "reissue token fail" });
    }
  } catch (error) {
    res.status(401).json({ status: 401, message: "Invalid refresh token" });
  }
});
module.exports = { getLogin, getSignUp, reissue, verifyAccessToken };
