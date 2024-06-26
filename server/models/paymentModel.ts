import { NextRequest } from "next/server";
import axios from "axios";
const crypto = require("crypto");
const connection = require("../../config/dbConnect");
const https = require("node:https");
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
const Payment = {
  requestKakaoPayment: async (req: Request) => {
    console.log("요청 여기까지");

    console.log("요청 여기까지");
    console.log(process.env.NEXT_PUBLIC_KAKAO_SECRET_KEY);
    const result = await kakaoAPI
      .post("/online/v1/payment/ready", req.body)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    return result;
  },
};

module.exports = Payment;
