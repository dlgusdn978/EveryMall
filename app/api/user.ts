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
export const signUp = async ({
  userId,
  userPwd,
  userName,
  userPhone,
}: SignUpProps) => {
  return API.post(`/api/signUp`, {
    userId,
    userPwd,
    userName,
    userPhone,
  });
};

export const login = async ({ userId, userPwd }: LoginProps) => {
  return API.post(`/api/login`, {
    userId,
    userPwd,
  });
};
