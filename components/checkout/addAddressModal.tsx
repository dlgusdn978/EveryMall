import React, { useState, ChangeEvent } from "react";
import Input from "../input";
import DaumPostCode from "react-daum-postcode";
type AddressProps = {
  userName: string;
  userPhone: string;
  userZoneCode: string;
  userAddress: string;
  userAddressDetail: string;
};
const AddAddressModal = () => {
  const [userName, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState<AddressProps>({
    userName: "",
    userPhone: "",
    userZoneCode: "",
    userAddress: "",
    userAddressDetail: "",
  });
  const [openPostcode, setOpenPostcode] = useState(false);
  const selectAddress = (data: any) => {
    console.log("????asdf");
    setOpenPostcode(false);
    setUserInfo((prev) => ({
      ...prev,
      ["userZoneCode"]: data.zonecode,
      ["userAddress"]: data.address,
    }));
    console.log(data);
    console.log(userInfo);
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
        <div className="relative">
          <Input
            title={"우편번호"}
            placeholder={"우편번호를 검색하세요"}
            name={"userZoneCode"}
            value={userInfo.userZoneCode}
            onChange={handleChange}
            readonly={true}
          ></Input>
          <button
            className="absolute right-0 top-1/2 z-20 cursor-pointer "
            onClick={() => setOpenPostcode(!openPostcode)}
          >
            {"주소 찾기"}
          </button>
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
      </div>
      <button
        onClick={() => {
          setOpenPostcode(!openPostcode);
        }}
      >
        닫기
      </button>
      {/* <div className="absolute top-1/3 left-1/3 z-20 w-1/3"> */}
      <div
        className={`absolute w-full h-full z-20 ${
          openPostcode ? "block" : "hidden"
        }`}
      >
        <DaumPostCode
          style={{
            height: "400px",
            width: "100%",
          }}
          onComplete={(data: any) => selectAddress(data)}
          autoClose={true}
          defaultQuery={"판교역로 235"}
        ></DaumPostCode>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AddAddressModal;
