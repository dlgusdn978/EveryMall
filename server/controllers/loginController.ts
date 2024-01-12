import type { NextApiRequest, NextApiResponse } from "next";
// const asyncHandler = require("express-async-handler");
require("dotenv").config();

const getLogin = (req: NextApiRequest, res: NextApiResponse) => {
  // res.json({ message: "getLogin" });
  //   res.render("/mypage");
};

module.exports = { getLogin };
