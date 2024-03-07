import axios from "axios";
import CommonAPI from "./common";
interface PaymentProps {
  cid: string;
  partner_order_id: string;
  partner_user_id: string;
  item_name: string;
  quantity: number;
  total_amount: number;
  tax_free_amount: number;
  approval_url: string;
  cancel_url: string;
  fail_url: string;
}
const kakaoAPI = axios.create({
  baseURL: "https://open-api.kakaopay.com",
  headers: {
    Authorization: `SECRET_KEY ${process.env.NEXT_PUBLIC_KAKAO_SECRET_KEY}`,
    "Content-Type": "application/json",
  },
});

export const requestKakaoPayment = async (props: PaymentProps) => {
  console.log("request 요청 들어옴?");
  console.log(props);
  return await CommonAPI.post("/api/payment/kakao", { props });
};
