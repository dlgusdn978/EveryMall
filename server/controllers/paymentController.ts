import { Request, Response } from "express";
import axios from "axios";
const crypto = require("crypto");
const https = require("node:https");
const asyncHandler = require("express-async-handler");
const Payment = require("../models/paymentModel");
const kakaoAPI = axios.create({
  baseURL: "https://open-api.kakaopay.com",
  headers: {
    Authorization: `SECRET_KEY ${process.env.NEXT_PUBLIC_KAKAO_SECRET_KEY_DEV}`,
    "Content-Type": "application/json",
  },
  httpAgent: new https.Agent({
    secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
  }),
});
const requestKakaoPayment = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await kakaoAPI
      .post("/online/v1/payment/ready", req.body)
      .then((response) => {
        console.log(response);
        res.json({ status: 200, data: response.data });
      })
      .catch((error) => res.json(error));
  }
);

module.exports = {
  requestKakaoPayment,
};
