import axios from "axios";
import { getToken } from "./auth";
import { logout } from "./auth";
import { hist } from "./../index";
// import jwt from "jsonwebtoken";

const api = axios.create({
  // baseURL: "http://localhost:3333",
  baseURL: "https://viacep.com.br/ws/"
});

api.interceptors.request.use(async (config) => {
  // const token = getToken();
  const token = 'abcxyz';

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    console.error("Network error. ", error);
  }

  const { status } = error.response;

  if (status === 401) {
    logout();
    hist.push("/");
  }

  if (status === 500) {
    console.error("Server error. ", error);
  }

  return Promise.reject(error);
});

export default api;
