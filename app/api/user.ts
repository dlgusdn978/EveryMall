import CommonAPI from "../api/common";
import API from "../api/index";
type SignUpProps = {
  userId: string;
  userPwd: string;
  userName: string;
  userPhone: string;
};
type LoginProps = {
  userId: string;
  userPwd: string;
};
type UserAddressProps = {
  userId: string;
  userName: string;
  userPhone: string;
  userZoneCode: string;
  userAddress: string;
  userAddressDetail: string;
  userRequest: string;
};
export const signUp = async ({
  userId,
  userPwd,
  userName,
  userPhone,
}: SignUpProps) => {
  return CommonAPI.post(`/api/signUp`, {
    userId,
    userPwd,
    userName,
    userPhone,
  });
};

export const login = async ({ userId, userPwd }: LoginProps) => {
  return CommonAPI.post(`/api/login`, {
    userId,
    userPwd,
  });
};

export const reissue = async () => {
  try {
    const res = await CommonAPI.get("/api/reissue");
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllAddress = async (userId: string) => {
  return CommonAPI.get(`/api/user/getAllAddress/${userId}`);
};

export const addAddress = async ({
  userId,
  userName,
  userPhone,
  userZoneCode,
  userAddress,
  userAddressDetail,
  userRequest,
}: UserAddressProps) => {
  return CommonAPI.post(`/api/user/addAddress`, {
    userId,
    userName,
    userPhone,
    userZoneCode,
    userAddress,
    userAddressDetail,
    userRequest,
  });
};
