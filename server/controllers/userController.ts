import { Request, Response } from "express";
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
const getLogin = asyncHandler(async (req: Request, res: Response) => {
  const body: any = req.body;
  const user: any = await User.login(body);
  console.log(user[0]);
  if (!user) {
    console.log("유저 없을 때");
    res.json({ status: 400, message: "Cannot found user" });
  }

  const compareRes = await bcrypt.compare(body.userId, user[0].password);
  if (!compareRes) {
    console.log("비밀번호 다를 때");
    res.json({ status: 400, message: "Incorrect password error" });
  }

  const token = jwt.sign({ id: user.id }, jwtSecret);
  res.cookie("token", token, { httpOnly: true });
  res.json({ status: 200, message: "login success" });
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

module.exports = { getLogin, getSignUp };
