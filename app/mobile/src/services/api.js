import axios from "axios";

export const API = axios.create({
  baseURL: "http://192.168.174.189:5000",
});
