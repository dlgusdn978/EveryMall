import React, { forwardRef } from "react";
import Image from "next/image";
type PaymentProps = {
  payMethod: string;
  source: string;
};
const PaymentBox = ({ item, isSelected, onClick }: any) => {
  return (
    <div
      className={`border-2 py-6 px-4 rounded-lg flex items-center justify-between ${
        isSelected ? "border-black" : ""
      }`}
      onClick={onClick}
    >
      <span>{item.payMethod}</span>
      <span>
        <Image
          src={item.source}
          width={40}
          height={40}
          alt={"payMethodIcon"}
        ></Image>
      </span>
    </div>
  );
};

export default PaymentBox;
