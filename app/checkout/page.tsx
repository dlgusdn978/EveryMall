"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useScript } from "usehooks-ts";
import Modal from "react-modal";
import { getBasketProduct } from "../api/basket";
import { useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";
import Image from "next/image";
import Head from "next/head";
import DaumPostcode from "react-daum-postcode";
import { useRouter } from "next/navigation";
import { ReceiverInfo } from "../../components/checkout/receiverInfo";
import PaymentBox from "../../components/product/paymentBox";
import cardIcon from "../../public/img/icons8-card-50.png";
import KakaoPay from "../../public/img/kakaopay.png";
import NaverPay from "../../public/img/naverpay.png";
import Payco from "../../public/img/payco.png";
import TossPay from "../../public/img/tosspay.png";
import AddressInfo from "../../components/modal/addressInfo";
import { requestKakaoPayment } from "../api/kakao";
type ProductProps = {
  uid: string;
  pid: number;
  count: number;
  name: string;
  link: string;
  price: number;
};
type AddressProps = {
  userName: string;
  userPhone: string;
  userZipcode: string;
  userAddress: string;
};

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
const Page = () => {
  const userId = useAppSelector((state: RootState) => state.user.user_id);
  const router = useRouter();
  const [modalState, setModalState] = useState(false);
  const [allAgree, setAllAgree] = useState(false);
  const [payAgree, setPayAgree] = useState(false);
  const [termAgree, setTermAgree] = useState(false);
  const paymentMethod = [
    { payMethod: "카드 결제", source: cardIcon.src },
    { payMethod: "네이버페이", source: NaverPay.src },
    { payMethod: "카카오페이", source: KakaoPay.src },
    { payMethod: "토스페이", source: TossPay.src },
    { payMethod: "페이코", source: Payco.src },
  ];

  const [selectedPayMethod, setSelectedPayMethod] = useState(-1);
  const handleClick = (method: number) => {
    setSelectedPayMethod(method);
  };

  // receiver 관련 변수

  const handleSenderInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };
  const [totalPrice, setTotalPrice] = useState(0);
  const [basketList, setBasketList] = useState<ProductProps[]>([]);
  const [openPostcode, setOpenPostcode] = useState(false);
  const kakao_secret_dev = process.env.NEXT_PUBLIC_KAKAO_SECRET_KEY_DEV;

  const handle = {
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },
    // selectAddress: (data: any) => {
    //   setOpenPostcode(false);
    //   setZonecode(data.zonecode);
    //   setAddress(data.address);
    // },
    backToBasket: () => {
      router.push("/basket");
    },
    getPaymentMethod: (method: string) => {
      console.log(method);
    },
    processPayment: () => {},
  };
  const getTotalPrice = (props: ProductProps[]) => {
    let price = 0;
    props.map((item) => {
      price += item.price * item.count;
    });
    return price;
  };
  const requestKakaoReady = () => {
    const productReceipt = {
      cid: "TC0ONETIME",
      partner_order_id: "1",
      partner_user_id: "test1",
      item_name: "아",
      quantity: 1,
      total_amount: 10000,
      tax_free_amount: 0,
      approval_url: "https://localhost:3000",
      cancel_url: "https://localhost:3000",
      fail_url: "https://localhost:3000",
    };
    requestKakaoPayment(productReceipt)
      .then((response) => {
        console.log("성공");
      })
      .catch((response) => {
        console.log("실패");
      });
  };

  return (
    <div className={`w-full [&>*]:mt-5 relative`}>
      <Head>
        <script
          src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
          defer
        ></script>
      </Head>

      <div className="">
        <button onClick={() => requestKakaoReady()}>kakaopay</button>
        <h1 className="font-bold text-xl">주문 정보</h1>
        <table className="border-t-2 w-full">
          <colgroup>
            <col className="w-1/6"></col>
            <col className="w-auto"></col>
            <col className="w-1/8"></col>
            <col className="w-1/12"></col>
            <col className="w-1/8"></col>
          </colgroup>
          <thead className="border-t-2 border-black">
            <tr className="[&>*]:py-5 bg-gray-100">
              <th>브랜드</th>
              <th>상품명</th>
              <th>구매가</th>
              <th>수량</th>
              <th>금액</th>
            </tr>
          </thead>
          <tbody className="[&>*]:py-5">
            {basketList.map((item, index) => (
              <tr
                className="[&>*]:text-center [&>*]:py-5 border-y-[1px]"
                key={index}
              >
                <td>아워홈</td>
                <td className="flex">
                  <Image
                    src={item.link}
                    alt={"product img"}
                    width={100}
                    height={100}
                  ></Image>
                  <p className="flex items-center ml-5">{item.name}</p>
                </td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td>{item.price * item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ReceiverInfo></ReceiverInfo>
      <div className="flex flex-row justify-between">
        <div className="w-7/12 min-w-[800px] ">
          <h1 className="font-bold text-xl">결제 수단</h1>
          <div className="grid grid-cols-3 gap-2 border-t-2 border-black pt-2 p-5 ">
            {paymentMethod.map((payment, index) => (
              <PaymentBox
                item={payment}
                isSelected={index === selectedPayMethod}
                key={index}
                onClick={() => handleClick(index)}
              ></PaymentBox>
            ))}
          </div>
        </div>
        <div className="w-4/12">
          <h1 className="font-bold text-xl">결제 금액</h1>
          <div className="bg-slate-50 border-2 p-8">
            <ul className="[&>*]:mb-6 [&>*]:flex [&>*]:justify-between border-b-2 border-black">
              <li>
                <span>총 주문 금액</span>
                <span>원</span>
              </li>
              <li>
                <span>쿠폰</span>
                <span>원</span>
              </li>
              <li>
                <span>포인트</span>
                <span>원</span>
              </li>
              <li>
                <span>배송비</span>
                <span>원</span>
              </li>
            </ul>
            <div className="pt-5 flex justify-between">
              <strong className="font-bold text-xl">최종 결제금액</strong>
              <span className="font-bold text-2xl text-orange-500">
                <b>7300원</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl">약관 동의</h1>
        <div className="border-t-2 border-black [&>*]:p-5">
          <div className="border-b-[1px] border-gray-200">
            <span className="flex items-center">
              <input
                type="checkbox"
                className="w-8 h-8 mr-2"
                name="agreeAll"
                checked={payAgree && termAgree}
                onChange={() => {
                  setPayAgree(!payAgree);
                  setTermAgree(!termAgree);
                }}
              ></input>
              <label htmlFor="agreeAll">
                <strong>전체 동의</strong>
              </label>
            </span>
          </div>
          <ul className="border-b-[1px] border-gray-200">
            <li>
              <span className="flex items-center">
                <input
                  type="checkbox"
                  className="w-8 h-8 mr-2"
                  name="agree1"
                  checked={payAgree}
                  onChange={() => {
                    setPayAgree(!payAgree);
                  }}
                ></input>
                <label htmlFor="agree1" className="text-gray-500">
                  주문의 상품,가격,배송정보, 할인내역 등을 최종 확인하였으며,
                  구매에 동의합니다. (필수) (전자상거래법 제 8조 제 2항)
                </label>
              </span>
            </li>
            <li className="mt-2">
              <span className="flex items-center">
                <input
                  type="checkbox"
                  className="w-8 h-8 mr-2"
                  name="agree2"
                  checked={termAgree}
                  onChange={() => {
                    setTermAgree(!termAgree);
                  }}
                ></input>
                <label htmlFor="agree2" className="text-gray-500">
                  개인정보 수집 동의 (필수)
                </label>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="[&>*]:w-72 [&>*]:h-20 flex justify-center">
        <input
          type="button"
          value="결제하기"
          className="bg-orange-500 font-bold text-2xl text-white mr-5"
          onClick={() => {
            handle.processPayment();
          }}
        ></input>
        <input
          type="button"
          value="장바구니로 가기"
          className="bg-gray-400 font-bold text-2xl text-white"
          onClick={() => handle.backToBasket()}
        ></input>
      </div>
      {openPostcode && (
        <div className="absolute top-0 w-full h-full bg-black z-10 opacity-50"></div>
      )}
      {openPostcode && (
        <div className="absolute top-1/3 left-1/3 z-20 w-1/3">
          <DaumPostcode
            // onComplete={handle.selectAddress}
            autoClose={false}
            defaultQuery={"판교역로 235"}
          ></DaumPostcode>
        </div>
      )}
    </div>
  );
};

export default Page;
