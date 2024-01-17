import API from "../api/index";

type UserProps = {
  userId: string;
  userPwd: string;
  userName: string;
  userPhone: string;
};
export const signUp = async ({
  userId,
  userPwd,
  userName,
  userPhone,
}: UserProps) => {
  console.log("signup");
  return API.post(`/api/signUp`, {
    userId,
    userPwd,
    userName,
    userPhone,
  })
    .then((response) => console.log(response.data))
    .catch((response) => console.log(response));
};
