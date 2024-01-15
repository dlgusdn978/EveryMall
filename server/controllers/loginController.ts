import type { NextApiRequest, NextApiResponse } from "next";
const User = require("../models/userModel");
// const asyncHandler = require("express-async-handler");
require("dotenv").config();

const getLogin = (req: NextApiRequest, res: NextApiResponse) => {
  // res.json({ message: "getLogin" });
  //   res.render("/mypage");
};
const getSignUp = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await User.regist(req.body);
  if (!user) {
    console.log("asdf?");
  }
  console.log("asdfasdfadsfasf");
};

module.exports = { getLogin, getSignUp };
