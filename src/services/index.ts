import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://randomuser.me/api",
  headers: {
    "Content-Type": "application.json",
    accept: "application/json",
  },
});
