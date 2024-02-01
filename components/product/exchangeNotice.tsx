import React from "react";

export const ExchangeNotice = () => {
  return (
    <div>
      <h1 className="font-bold text-lg mb-3">교환/반품 안내</h1>
      <span>
        ㆍ교환/반품에 관한 일반적인 사항은 판매자가 제시사항보다 관계법령이
        우선합니다. <br />
        다만, 판매자의 제시사항이 관계법령보다 소비자에게 유리한 경우에는 판매자
        제시사항이 적용됩니다.
      </span>
      <table className="w-full border-slate-200 border-2">
        <tbody className="[&>*]:border-2">
          <tr className="flex-row">
            <th className="w-48 h-32 text-sm flex items-center p-5 bg-gray-100 font-normal">
              <span>
                교환/반품비용
                <br />
                (왕복비용)
              </span>
            </th>
            <td className="text-sm p-3">
              <span>6,000원 </span>
              <br />
              <span>- 단, 고객 변심의 경우에만 발생</span> <br />
              <span>- 도서산간 및 일부 지역 추가비용 발생 </span>
              <br />
              <span>
                - 부분반품 시, 남은금액이 무료배송 조건을 유지하면 편도
                배송비용만 부과
              </span>
            </td>
          </tr>
          <tr>
            <th className="w-48 h-24 text-sm flex items-center p-5 bg-gray-100 font-normal">
              교환/반품 신청 기준일
            </th>
            <td className="text-sm p-3">
              ㆍ단순변심에 의한 교환/반품은 제품 수령 후 7일 이내까지, 교환/반품
              제한사항에 해당하지 않는 경우에만 가능 (배송비용과 교환/반품 비용
              왕복배송비 고객부담) <br />
              ㆍ상품의 내용이 표시·광고의 내용과 다른 경우에는 상품을 수령한
              날부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일
              이내에 청약철회 가능
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
