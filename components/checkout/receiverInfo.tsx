import React, { useState } from "react";

export const ReceiverInfo = () => {
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div>
      <h1 className="font-bold text-xl">배송지 정보</h1>
      <table className="w-full border-t-2 border-black">
        <colgroup>
          <col className="w-1/4 bg-gray-100"></col>
          <col className="w-3/4"></col>
        </colgroup>
        <tbody className="[&>*]:border-b-2 [&>*]:border-slate-200 ">
          <tr>
            <th className="py-5">배송지 선택</th>
            <td className="pl-5">기본 배송지</td>
          </tr>
          <tr>
            <th className="py-5">받으시는 분</th>
            <td className="pl-5">
              <input
                type="text"
                className="border-[1px] p-2 w-64"
                placeholder="받으시는 분 성함"
              />
            </td>
          </tr>
          <tr>
            <th className="py-5">휴대폰</th>
            <td className="pl-5">
              <select>
                <option>010</option>
                <option>011</option>
              </select>
              <input
                type="text"
                className="border-[1px] p-2 w-64"
                placeholder="번호입력"
              />
              <input
                type="text"
                className="border-[1px] p-2 w-64"
                placeholder="번호입력"
              />
            </td>
          </tr>
          <tr>
            <th className="py-5">주소</th>
            <td className="pl-5">
              <input
                type="text"
                className="border-[1px] p-2 w-64"
                placeholder="우편번호"
              />
              <input
                type="button"
                value="우편번호"
                // onClick={handle.clickButton}
                className="border-[1px] p-2 w-64"
              />

              <input
                type="text"
                placeholder="주소"
                className="w-full border-[1px] p-2 w-64"
              />
              <input
                type="text"
                placeholder="상세주소"
                className="w-full border-[1px] p-2 w-64"
              />
            </td>
          </tr>
          <tr>
            <th className="py-5">배송시 요청사항</th>
            <td className="pl-5">
              <input
                type="text"
                placeholder="50자 이내로 입력하세요. ex) 경비실에 맡겨주세요."
                className="border-[1px] p-2 w-full"
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
