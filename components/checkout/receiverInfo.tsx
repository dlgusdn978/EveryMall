import React, {
  useState,
  useEffect,
  ChangeEvent,
  MouseEventHandler,
} from "react";
import AddressInfo from "../modal/addressInfo";
import Modal from "react-modal";
import AddAddressModal from "./addAddressModal";
export const ReceiverInfo = () => {
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState({
    "받는 분": "이현우",
    연락처: "01088778608",
    "배송 주소": "서울시 광진구 뚝섬로 47길 26-3",
  });
  const [modalState, setModalState] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [userName, setUserName] = useState("");
  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const pseudoAddress = [
    {
      userName: "이현우",
      userPhone: "010-1234-1234",
      userZipcode: "01234",
      userAddress: "서울시 강남구 테헤란로 123",
    },
    {
      userName: "홍길동",
      userPhone: "010-3333-1234",
      userZipcode: "01234",
      userAddress: "서울시 강남구 테헤란로 123",
    },
    {
      userName: "김철수",
      userPhone: "010-1234-1111",
      userZipcode: "01234",
      userAddress: "서울시 강남구 테헤란로 123",
    },
    {
      userName: "짱구",
      userPhone: "010-1277-3332",
      userZipcode: "04531",
      userAddress: "서울시 강남구 테헤란로 123",
    },
  ];
  const selectAddress = (data: any) => {
    setZonecode(data.zonecode);
    setAddress(data.address);
  };
  useEffect(() => {
    if (modalState) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("oveflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modalState]);
  const handleModalState = () => {
    setModalState(!modalState);
  };
  const addressInfo = ["받는 분", "연락처", "배송 주소"];
  return (
    <div className="">
      <h1 className="font-bold text-xl">배송지 정보</h1>
      <div className="relative border-t-2 border-black p-5">
        <div className="flex">
          <dt className="w-32 text-gray-400">받는 분</dt>
          <dd>이현우</dd>
        </div>
        <div className="flex ">
          <dt className="w-32 text-gray-400">연락처</dt>
          <dd>01088778608</dd>
        </div>
        <div className="flex">
          <dt className="w-32 text-gray-400">배송 주소</dt>
          <dd>서울 광진구 뚝섬로 47길 26-3 경성그린빌 401호 05062</dd>
        </div>

        <button
          className="absolute right-5 top-1/4 border-2 px-4 py-3 rounded-lg"
          onClick={() => {
            setModalState(true);
          }}
        >
          변경
        </button>
      </div>

      <div className="px-5">
        <button className="flex w-full py-3 border-2 py-3 px-3 rounded-lg items-start">
          요청사항 없음
        </button>
      </div>

      <Modal
        isOpen={modalState}
        className="border-2 overflow-hidden"
        style={{
          overlay: {
            background: "rgba(34, 34, 34, 0.5)",
            position: "fixed",
            zIndex: 10,
            top: 0,
            left: 0,
            bottom: 0,
            overflow: "hidden",
          },
          content: {
            background: "white",
            width: "700px",
            height: "800px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 5,
            borderRadius: "15px",
            padding: "5px",
          },
        }}
      >
        <button
          onClick={() => {
            setTranslate(!translate);
          }}
          className={`absolute top-6 left-10 ${translate ? "block" : "hidden"}`}
        >
          {"뒤로가기"}
        </button>
        <button
          onClick={() => {
            setModalState(false);
          }}
          className="absolute top-6 right-10"
        >
          {"X"}
        </button>
        <div className="flex py-4 px-12 justify-center text-xl font-bold">
          <h2>주소록</h2>
        </div>
        <div
          className={`flex transition delay-100 ${
            translate ? "translate-x-[-100%]" : "translate-x-0"
          }`}
        >
          <div className={`px-5 py-4 min-w-full`}>
            {pseudoAddress.map((item, index) => (
              <AddressInfo
                userName={item.userName}
                userPhone={item.userPhone}
                userAddress={item.userAddress}
                userZipcode={item.userZipcode}
                key={index}
              ></AddressInfo>
            ))}
          </div>
          <div className="min-w-full px-5 py-4">
            <AddAddressModal closeModal={handleModalState}></AddAddressModal>
          </div>
          <div className="flex absolute bottom-0 p-5 w-full">
            <button
              className="w-full items-center border-2 py-5 rounded-lg"
              onClick={() => {
                setTranslate(!translate);
              }}
            >
              <span>+</span>
              <span>주소록 추가</span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
