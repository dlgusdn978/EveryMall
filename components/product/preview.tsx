import React from "react";
import ImageDiv from "../image";
import hanger from "../../public/img/hanger.jpg";
const Preview = () => {
  return (
    <div className="p-3 m-3 border-2">
      <ImageDiv
        alt={"alt"}
        height={300}
        width={300}
        src={hanger.src}
      ></ImageDiv>
      <div className="m-4 m-auto [&>*]:mt-3">
        <div className="font-bold text-gray-600">
          이동식 스탠드 행거, 옷걸이 행거, 블랙
        </div>
        <div className="font-bold text-red-600 text-lg">59900원</div>
        <div>별점</div>
      </div>
    </div>
  );
};

export default Preview;
