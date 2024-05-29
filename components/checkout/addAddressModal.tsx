import React, { useState, ChangeEvent, useEffect } from "react";
import Input from "../input";
import { addAddress } from "../../app/api/user";
import { RootState } from "../../lib/store";
import DaumPostcodeEmbed, { useDaumPostcodePopup } from "react-daum-postcode";
import { useAppSelector } from "../../lib/hooks";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";

type UserAddressProps = {
  userId: string;
  userName: string;
  userPhone: string;
  userZoneCode: string;
  userAddress: string;
  userAddressDetail: string;
  userRequest: string;
};
type ModalProps = {
  closeModal: () => void;
};
const AddAddressModal = ({ closeModal }: ModalProps) => {
  const user = useAppSelector((state: RootState) => state.user);

  const [userName, setUserName] = useState(postcodeScriptUrl);
  const [userInfo, setUserInfo] = useState<UserAddressProps>({
    userId: user.user_id,
    userName: "",
    userPhone: "",
    userZoneCode: "",
    userAddress: "",
    userAddressDetail: "",
    userRequest: "",
  });
  const open = useDaumPostcodePopup();

  const openAddressWindow = () => {
    open({ onComplete: selectAddress });
  };
  const selectAddress = (data: any) => {
    setUserInfo((prev) => ({
      ...prev,
      ["userZoneCode"]: data.zonecode,
      ["userAddress"]: data.address,
    }));
  };

  const addUserAddress = () => {
    closeModal();
    console.log(userInfo);
    addAddress(userInfo);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="relative flex flex-col">
      <div className="z-0">
        <Input
          title={"이름"}
          placeholder={"수령인의 이름"}
          name={"userName"}
          value={userInfo.userName}
          onChange={handleChange}
        ></Input>
        <Input
          title={"휴대폰 번호"}
          placeholder={"- 없이 입력"}
          name={"userPhone"}
          value={userInfo.userPhone}
          onChange={handleChange}
        ></Input>
        <div className="flex flex-row-reverse">
          <button
            className="p-2 px-4 my-10 w-32 cursor-pointer rounded-lg bg-orange-400 text-white"
            onClick={openAddressWindow}
          >
            {"주소 찾기"}
          </button>
          <Input
            title={"우편번호"}
            placeholder={"우편번호를 검색하세요"}
            name={"userZoneCode"}
            value={userInfo.userZoneCode}
            onChange={handleChange}
            readonly={true}
            width={"full"}
          ></Input>
        </div>

        <Input
          title={"주소"}
          placeholder={"우편 번호 검색 후, 자동 입력됩니다"}
          name={"userAddress"}
          value={userInfo.userAddress}
          onChange={handleChange}
          readonly={true}
        ></Input>
        <Input
          title={"상세 주소"}
          placeholder={"건물, 아파트, 동/호수 입력"}
          name={"userAddressDetail"}
          value={userInfo.userAddressDetail}
          onChange={handleChange}
        ></Input>
        <button
          className="w-full border-2 py-3 rounded-lg bg-orange-500 text-white font-bold text-lg"
          onClick={addUserAddress}
        >
          {"확인"}
        </button>
      </div>
    </div>
  );
};

export default AddAddressModal;
