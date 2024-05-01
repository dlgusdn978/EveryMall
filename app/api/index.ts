import axios from "axios";
import { reissue } from "./user";
import { redirect } from "next/navigation";
const API = axios.create({
  baseURL: "https://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  async (config) => {
    const access_token = localStorage.getItem("access_token");
    const expiration_time = localStorage.getItem("expiration_time");
    console.log("토큰 : ", access_token);
    if (access_token && expiration_time) {
      if (Number(expiration_time) - new Date(Date.now()).getTime() < 0) {
        const new_access_token = await reissue();
        localStorage.setItem("access_token", new_access_token);
        config.headers["Authorization"] = `Bearer ${new_access_token}`;
      } else {
        config.headers["Authorization"] = `Bearer ${access_token}`;
      }
    } else {
      redirect("/login");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
API.interceptors.response.use(async (res) => {
  return res;
});
export default API;
