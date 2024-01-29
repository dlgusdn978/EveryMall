import axios from "axios";
import { reissue } from "./user";

const API = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
});
API.interceptors.request.use(
  async (config) => {
    const access_token = localStorage.getItem("access_token");
    const expiration_time = localStorage.getItem("expiration_time");

    if (access_token && expiration_time) {
      if (Number(expiration_time) - new Date(Date.now()).getTime() < 0) {
        const new_access_token = await reissue();
        config.headers.Authorization = new_access_token;
      } else {
        config.headers.Authorization = access_token;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);
API.interceptors.response.use(async (res) => {
  return res;
});
export default API;
