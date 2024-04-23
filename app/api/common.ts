import axios from "axios";

const CommonAPI = axios.create({
  baseURL: "https://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
});

export default CommonAPI;
