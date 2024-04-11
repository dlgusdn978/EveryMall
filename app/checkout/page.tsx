"use client";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  EventHandler,
  useEffect,
  useState,
  useRef,
  SyntheticEvent,
  MutableRefObject,
} from "react";
import Modal from "react-modal";
import { getBasketProduct } from "../api/basket";
import { useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";
import Image from "next/image";
import Head from "next/head";
import DaumPostcode from "react-daum-postcode";
import { useRouter } from "next/navigation";
import { requestKakaoPayment } from "../api/payment";
import dotenv from "dotenv";
import { SenderInfo } from "../../components/checkout/senderInfo";
import { ReceiverInfo } from "../../components/checkout/receiverInfo";
import PaymentBox from "../../components/product/paymentBox";
import cardIcon from "../../public/img/icons8-card-50.png";
import KakaoPay from "../../public/img/kakaopay.png";
import NaverPay from "../../public/img/naverpay.png";
import Payco from "../../public/img/payco.png";
import TossPay from "../../public/img/tosspay.png";
import AddressInfo from "../../components/modal/addressInfo";
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
type PaymentProps = {
  payMethod: string;
  source: string;
};
const Page = () => {
  const userId = useAppSelector((state: RootState) => state.user.user_id);
  const router = useRouter();
  const [modalState, setModalState] = useState(false);
  const paymentMethod = [
    { payMethod: "카드 결제", source: cardIcon.src },
    { payMethod: "네이버페이", source: NaverPay.src },
    { payMethod: "카카오페이", source: KakaoPay.src },
    { payMethod: "토스페이", source: TossPay.src },
    { payMethod: "페이코", source: Payco.src },
  ];

  const pseudoAddress = [
    {
      userName: "이현우",
      userPhone: "010-1234-1234",
      userZipcode: "01234",
      userAddress: "서울시 강남구 테헤란로 123",
    },
    {
      userName: "홍길동",
      userPhone: "010-3333-1234",
      userZipcode: "01234",
      userAddress: "서울시 강남구 테헤란로 123",
    },
    {
      userName: "김철수",
      userPhone: "010-1234-1111",
      userZipcode: "01234",
      userAddress: "서울시 강남구 테헤란로 123",
    },
    {
      userName: "짱구",
      userPhone: "010-1277-3332",
      userZipcode: "04531",
      userAddress: "서울시 강남구 테헤란로 123",
    },
  ];
  const [selectedPayMethod, setSelectedPayMethod] = useState(-1);
  const handleClick = (method: number) => {
    setSelectedPayMethod(method);
  };
  // sender 관련 변수
  const senderNameRef = useRef<HTMLInputElement>(null);
  const senderPhoneRef = useRef<HTMLInputElement>(null);
  const senderEmailRef = useRef<HTMLInputElement>(null);

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
    processPayment: () => {
      console.log(senderNameRef.current);
      console.log(senderPhoneRef.current);
      console.log(senderEmailRef.current);
    },
  };
  const getTotalPrice = (props: ProductProps[]) => {
    let price = 0;
    props.map((item) => {
      price += item.price * item.count;
    });
    return price;
  };
  useEffect(() => {
    getBasketProduct(userId).then((response) => {
      console.log(response.data.getProduct);
      setBasketList(response.data.getProduct);
      setTotalPrice(getTotalPrice(response.data.getProduct));
    });
  }, [userId]);

  useEffect(() => {
    if (modalState) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("oveflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modalState]);
  return (
    <div className={`w-full [&>*]:mt-5 relative`}>
      <Head>
        <script
          src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
          defer
        ></script>
      </Head>

      <div className="">
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
        <div className="w-7/12 min-w-[800px]">
          <h1 className="font-bold text-xl">결제 수단</h1>
          <div className="grid grid-cols-3 gap-2 border-t-2 border-black pt-2 ">
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
              <li>
                <span>배송비 할인</span>
                <span>원</span>
              </li>
              <li>
                <span>포장비</span>
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
          onClick={() => handle.processPayment()}
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
      <button
        onClick={() => {
          setModalState(true);
        }}
      >
        {"모달"}
      </button>
      <Modal
        isOpen={modalState}
        className="border-2"
        // parentSelector={()=>{return document.querySelector('#root')}}
        style={{
          overlay: {
            background: "rgba(34, 34, 34, 0.5)",
            position: "fixed",
            zIndex: 10,
            top: 0,
            left: 0,
            bottom: 0,
            overflow: "hidden",
          },
          content: {
            background: "white",
            width: "700px",
            height: "800px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 5,
            borderRadius: "15px",
            padding: "5px",
          },
        }}
      >
        <button
          onClick={() => {
            setModalState(false);
          }}
          className="absolute top-6 right-10"
        >
          {"X"}
        </button>
        <div className="flex py-4 px-12 justify-center text-xl font-bold">
          <h2>주소록</h2>
        </div>
        <div className="px-5 py-4">
          {pseudoAddress.map((item, index) => (
            <AddressInfo
              userName={item.userName}
              userPhone={item.userPhone}
              userAddress={item.userAddress}
              userZipcode={item.userZipcode}
              key={index}
            ></AddressInfo>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Page;
