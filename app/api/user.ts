import API from "../api/index";

export const signUp = async () => {
  console.log("signup");
  return API.post(`/api/signUp`, {
    userId: "asdf",
  })
    .then((response) => console.log(response.data))
    .catch((response) => console.log(response));
};
