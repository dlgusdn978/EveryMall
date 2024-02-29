"use client";
import React, { useEffect, useState } from "react";
import { getBasketProduct } from "../api/basket";
import { useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";
import Image from "next/image";
import Head from "next/head";
import DaumPostcode from "react-daum-postcode";
type ProductProps = {
  uid: string;
  pid: number;
  count: number;
  name: string;
  link: string;
  price: number;
};
export default function Page() {
  const userId = useAppSelector((state: RootState) => state.user.user_id);
  const [totalPrice, setTotalPrice] = useState(0);
  const [basketList, setBasketList] = useState<ProductProps[]>([]);
  const [zonecode, setZonecode] = useState(0);
  const [address, setAddress] = useState("");
  const [openPostcode, setOpenPostcode] = useState(false);
  const handle = {
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },
    selectAddress: (data: any) => {
      setOpenPostcode(false);
      setZonecode(data.zonecode);
      setAddress(data.address);
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

  return (
    <div className="w-full [&>*]:mt-5 relative">
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
      <div className="">
        <h1 className="font-bold text-xl">주문자 정보</h1>
        <table className="border-t-2 w-full">
          <colgroup>
            <col className="w-1/4 py-5 mx-2 bg-gray-100"></col>
            <col className="w-3/4"></col>
          </colgroup>

          <tbody className="border-t-2 border-black [&>*]:border-b-2 [&>*]:border-slate-200">
            <tr className="ml-5">
              <th className="py-5 mx-2">
                <label>성함</label>
              </th>
              <td>
                <input
                  type="text"
                  placeholder="성함을 입력해주세요."
                  className="border-[1px] p-2 w-64"
                />
              </td>
            </tr>
            <tr className="">
              <th className="py-5">휴대폰</th>
              <td>
                <select className="border-[1px] p-2 w-64">
                  <option>010</option>
                  <option>011</option>
                </select>
                <input
                  type="text"
                  placeholder="성함을 입력해주세요."
                  className="border-[1px] p-2 w-64"
                />
                <input
                  type="text"
                  placeholder="성함을 입력해주세요."
                  className="border-[1px] p-2 w-64"
                />
              </td>
            </tr>
            <tr className="">
              <th className=" py-5">이메일</th>
              <td>
                <input
                  type="text"
                  placeholder="성함을 입력해주세요."
                  className="border-[1px] p-2 w-64"
                />
                @
                <input
                  type="text"
                  placeholder="성함을 입력해주세요."
                  className="border-[1px] p-2 w-64"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="font-bold text-xl">배송지 정보</h1>
        <table className="w-full border-t-2 border-black">
          <colgroup>
            <col className="w-1/4 bg-gray-100"></col>
            <col className="w-3/4"></col>
          </colgroup>
          <tbody className="[&>*]:border-b-2 [&>*]:border-slate-200">
            <tr>
              <th className="py-5">배송지 선택</th>
              <td>기본 배송지</td>
            </tr>
            <tr>
              <th className="py-5">받으시는 분</th>
              <td>
                <input type="text" placeholder="받으시는 분 성함" />
              </td>
            </tr>
            <tr>
              <th className="py-5">휴대폰</th>
              <td>
                <select>
                  <option>010</option>
                  <option>011</option>
                </select>
                <input type="text" placeholder="번호입력" />
                <input type="text" placeholder="번호입력" />
              </td>
            </tr>
            <tr>
              <th className="py-5">주소</th>
              <td>
                <input type="text" placeholder="우편번호" value={zonecode} />
                <input
                  type="button"
                  value="우편번호"
                  onClick={handle.clickButton}
                />

                <input
                  type="text"
                  placeholder="주소"
                  className="w-full"
                  value={address}
                />
                <input type="text" placeholder="상세주소" className="w-full" />
              </td>
            </tr>
            <tr>
              <th className="py-5">배송시 요청사항</th>
              <td>
                <input
                  type="text"
                  placeholder="50자 이내로 입력하세요. ex) 경비실에 맡겨주세요."
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-7/12">
          <h1 className="font-bold text-xl">결제 수단</h1>
          <div className="border-t-2 border-black p-5 [&>*]:mr-5 [&>*]:[&>*]:mr-2">
            <form>
              <span>
                <input
                  type="radio"
                  id="card"
                  name="payment"
                  value="card"
                ></input>
                <label htmlFor="card">신용카드</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="account"
                  name="payment"
                  value="account"
                ></input>
                <label htmlFor="account">계좌이체</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="kakao"
                  name="payment"
                  value="kakao"
                ></input>
                <label htmlFor="kakao">카카오페이</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="naver"
                  name="payment"
                  value="naver"
                ></input>
                <label htmlFor="naver">네이버페이</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="toss"
                  name="payment"
                  value="toss"
                ></input>
                <label htmlFor="toss">토스페이</label>
              </span>
            </form>
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
        ></input>
        <input
          type="button"
          value="장바구니로 가기"
          className="bg-gray-400 font-bold text-2xl text-white"
        ></input>
      </div>
      {openPostcode && (
        <div className="absolute top-0 w-full h-full bg-black z-10 opacity-50"></div>
      )}
      {openPostcode && (
        <div className="absolute top-1/3 left-1/3 z-20 w-1/3">
          <DaumPostcode
            onComplete={handle.selectAddress}
            autoClose={false}
            defaultQuery={"판교역로 235"}
          ></DaumPostcode>
        </div>
      )}
    </div>
  );
}
