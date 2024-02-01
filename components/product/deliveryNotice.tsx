import React from "react";
export const DeliveryNotice = () => {
  return (
    <div>
      <h1 className="font-bold text-lg mb-3">배송정보</h1>
      <table className="w-full border-slate-200 border-2">
        <tbody className="[&>*]:border-b-2  [&>*]:flex [&>*]:justify-start  text-sm font-normal">
          <tr className="[&>*]:p-5 ">
            <th className="flex items-start w-36 bg-gray-100 font-normal">
              배송방법
            </th>
            <td className="w-1/2">순차배송</td>
            <th className="flex items-start row-span-2 w-36 bg-gray-100 font-normal">
              배송비
            </th>
            <td className=" row-span-2">5,000원 - 도서 산간 지역 배송 불가</td>
          </tr>
          <tr className="[&>*]:p-5">
            <th className="flex items-start w-36 bg-gray-100 font-normal">
              배송사
            </th>
            <td>롯데택배</td>
          </tr>
          <tr className="[&>*]:p-5">
            <th className="flex items-start w-36 bg-gray-100 font-normal">
              묶음배송 여부
            </th>
            <td>불가능</td>
          </tr>
          <tr className="[&>*]:p-5">
            <th className="flex items-start w-36 bg-gray-100 font-normal">
              배송기간
            </th>
            <td>
              ㆍ도서산간 지역 등은 배송에 3-5일이 더 소요될 수 있습니다.
              <br />- 천재지변, 물량 수급 변동 등 예외적인 사유 발생 시, 다소
              지연될 수 있는 점 양해 부탁드립니다.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
