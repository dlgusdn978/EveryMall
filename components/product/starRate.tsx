import React from "react";
import star from "../../public/img/star.png";
import Image from "next/image";

const StarRate = ({ star_rate }: { star_rate: number }) => {
  const percentage: number = star_rate * 20;
  console.log(percentage);
  return (
    <div className="relative text-lg flex items-center">
      <div
        style={{ width: `${percentage}%` }}
        className="absolute text-orange-500 overflow-hidden
        "
      >
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className="text-gray-400 w-full h-full">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      {/* <span className="text-xs">({star_rate})</span> */}
    </div>
  );
};

export default StarRate;
