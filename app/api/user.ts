import CommonAPI from "../api/common";
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
