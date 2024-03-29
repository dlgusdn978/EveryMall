import React from "react";

export const ExchangeLimitNotice = () => {
  return (
    <div>
      <h1 className="font-bold text-lg mb-3">교환/반품 제한사항</h1>
      <span>ㆍ주문/제작 상품의 경우, 상품의 제작이 이미 진행된 경우</span>
      <br />
      <span>
        ㆍ상품 포장을 개봉하여 사용 또는 설치 완료되어 상품의 가치가 훼손된 경우
        (단, 내용 확인을 위한 포장 개봉의 경우는 예외)
      </span>
      <br />
      <span>
        ㆍ고객의 사용, 시간경과, 일부 소비에 의하여 상품의 가치가 현저히 감소한
        경우
      </span>
      <br />
      <span>
        ㆍ세트상품 일부 사용, 구성품을 분실하였거나 취급 부주의로 인한
        파손/고장/오염으로 재판매 불가한 경우
      </span>
      <br />
      <span>
        ㆍ모니터 해상도의 차이로 인해 색상이나 이미지가 실제와 달라, 고객이 단순
        변심으로 교환/반품을 무료로 요청하는 경우
      </span>
      <br />
      <span>
        ㆍ제조사의 사정 (신모델 출시 등) 및 부품 가격 변동 등에 의해 무료
        교환/반품으로 요청하는 경우
      </span>
      <br />
      <span className="font-bold">
        ※ 각 상품별로 아래와 같은 사유로 취소/반품이 제한될 수 있습니다.
      </span>
      <br />
      <table className="border-slate-200 border-2">
        <tbody className="[&>*]:p-5 ">
          <tr className="[&>*]:p-5">
            <th className="bg-gray-100 font-normal flex items-cetner font-normal text-sm">
              의류/잡화/수입명품
            </th>
            <td className="text-sm">
              ㆍ상품의 택(TAG) 제거, 라벨 및 상품 훼손, 구성품 누락으로 상품의
              가치가 현저히 감소된 경우
            </td>
          </tr>
          <tr className="[&>*]:p-5 ">
            <th className="h-20 bg-gray-100 font-normal flex items-cetner font-normal text-sm">
              계절상품/식품/화장품{" "}
            </th>
            <td className="text-sm">
              ㆍ신선/냉장/냉동 상품의 단순변심의 경우 <br />
              ㆍ뷰티 상품 이용 시 트러블(알러지, 붉은 반점, 가려움, 따가움)이
              발생하는 경우, 진료 확인서 및 소견서 등을 증빙하면 환불이 가능
              (제반비용 고객부담)
            </td>
          </tr>
          <tr className="[&>*]:p-5">
            <th className="h-28 bg-gray-100 font-normal flex items-cetner  font-normal text-sm">
              <span>전자/가전/설치상품</span>
            </th>
            <td className="text-sm">
              ㆍ설치 또는 사용하여 재판매가 어려운 경우
              <br /> ㆍ상품의 시리얼 넘버 유출로 내장된 소프트웨어의 가치가
              감소한 경우 (내비게이션, OS시리얼이 적힌 PMP)
              <br /> ㆍ홀로그램 등을 분리, 분실, 훼손하여 상품의 가치가 현저히
              감소하여 재판매가 불가할 경우 (노트북, 데스크탑 PC 등)
            </td>
          </tr>
          <tr className="[&>*]:p-5">
            <th className="bg-gray-100 font-normal flex items-cetner font-normal text-sm">
              자동차용품{" "}
            </th>
            <td className="text-sm">
              ㆍ상품을 개봉하여 장착한 이후 단순변심인 경우
            </td>
          </tr>
          <tr className="[&>*]:p-5">
            <th className="bg-gray-100 font-normal flex items-cetner font-normal text-sm">
              CD/DVD/GAME/
            </th>
            <td className="text-sm">
              ㆍ복제가 가능한 상품의 포장 등을 훼손한 경우
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
