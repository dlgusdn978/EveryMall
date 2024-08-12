import React, { useState } from "react";
import { deleteAddress } from "../../app/api/user";
type AddressProps = {
  userName: string;
  userPhone: string;
  userZonecode: string;
  userAddress: string;
  userAddressDetail: string;
  userAddressId: number;
};
const getHyphenNumber = (userPhone: string) => {};
const AddressInfo = ({
  userName,
  userPhone,
  userZonecode,
  userAddress,
  userAddressDetail,
  userAddressId,
}: AddressProps) => {
  const [item, setItem] = useState(true);
  const deleteItem = () => {
    // console.log(userAddressId);

    deleteAddress(userAddressId)
      .then((response) => {
        console.log("success");
        setItem(false);
      })
      .catch(() => {
        console.log("fail");
      });
  };
  return (
    <div
      className={`py-4 border-b-2 flex flex-col justify-between ${
        item ? "block" : "hidden"
      }`}
    >
      <div className="relative">
        <div className="flex flex-col">
          <strong className="text-xl">{userName}</strong>
          {/* <span className="text-lg text-gray-500">{userPhone}</span> */}
          <ul>
            <li>{userPhone}</li>
          </ul>
          <p className="text-gray-600 text-lg pt-2">
            {userAddress}
            {"(" + userZonecode + ")"}
          </p>
        </div>
        <button className="absolute top-0 right-0 z-1 w-full h-full">
          <p className="absolute top-0 right-0 rounded-lg bg-orange-200 py-2 px-4 text-orange-500 font-bold text-lg">
            {"선택"}
          </p>
        </button>
      </div>
      <div className="pt-4 [&>*]:mr-2">
        <button className="border-2 rounded-lg px-3 py-2">수정</button>
        <button className="border-2 rounded-lg px-3 py-2" onClick={deleteItem}>
          삭제
        </button>
      </div>
      {/* <div className="flex items-center">{"선택"}</div> */}
    </div>
  );
};

export default AddressInfo;
