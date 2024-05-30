import React from "react";
type AddressProps = {
  userName: string;
  userPhone: string;
  userZonecode: string;
  userAddress: string;
  userAddressDetail: string;
};
const AddressInfo = ({
  userName,
  userPhone,
  userZonecode,
  userAddress,
  userAddressDetail,
}: AddressProps) => {
  return (
    <div className="py-4 border-b-2 flex justify-between">
      <div className="flex flex-col">
        <span className="text-xl font-bold ">{userName}</span>
        <span className="text-lg text-gray-500">{userPhone}</span>
        <span className="text-gray-600">
          {"(" + userZonecode + ")"}
          {userAddress}
        </span>
      </div>
      <div className="flex items-center">{"check"}</div>
    </div>
  );
};

export default AddressInfo;
