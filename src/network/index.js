import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8088/tblog",
});

request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use((result) => {
  return result.data;
});

export default request;
