import React, {
  ChangeEvent,
  useState,
  forwardRef,
  MutableRefObject,
  RefObject,
} from "react";

interface SenderProps {
  name: RefObject<HTMLInputElement>;
  phone: RefObject<HTMLInputElement>;
  email: RefObject<HTMLInputElement>;
}
export const SenderInfo = ({ name, phone, email }: SenderProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };
  return (
    <div className="">
      <h1 className="font-bold text-xl">주문자 정보</h1>
      <table className="border-t-2 w-full">
        <colgroup>
          np
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
                name="name"
                ref={name}
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
                ref={phone}
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
                ref={email}
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
  );
};

export default SenderInfo;
