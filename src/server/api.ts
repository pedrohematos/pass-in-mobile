import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.20.8:3001",
});
