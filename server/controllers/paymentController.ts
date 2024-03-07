import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Payment = require("../models/paymentModel");
const requestKakaoPayment = asyncHandler(
  async (req: Request, res: Response) => {
    console.log("controller");
    const result = await Payment.requestKakaoPayment(req);
    // res.json({ status: 200, result });
  }
);

module.exports = {
  requestKakaoPayment,
};
