import type { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/dist/server/api-utils";
const User = require("../models/userModel");
// const asyncHandler = require("express-async-handler");
require("dotenv").config();

const getLogin = (req: Request, res: Response) => {
  // res.json({ message: "getLogin" });
  //   res.render("/mypage");
};
const getSignUp = async (req: Request, res: Response) => {
  const user = await User.regist(req.body);
  console.log(user);
  console.log(res.json());
  return res.json();
};

module.exports = { getLogin, getSignUp };
