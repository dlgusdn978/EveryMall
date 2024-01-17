import type { NextApiRequest, NextApiResponse } from "next";
const User = require("../models/userModel");
// const asyncHandler = require("express-async-handler");
require("dotenv").config();

const getLogin = (req: Request, res: Response) => {
  // res.json({ message: "getLogin" });
  //   res.render("/mypage");
};
const getSignUp = async (req: Request, res: Response) => {
  const user = await User.regist(req.body);
  if (!user) {
    console.log("asdf?");
  }
};

module.exports = { getLogin, getSignUp };
