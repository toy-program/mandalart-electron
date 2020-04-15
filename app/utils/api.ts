import axios from "axios";
import {ENDPOINTS} from "@/constants";

export const api = axios.create({baseURL: ENDPOINTS.BASEURL});
export const authApi = (token: string) =>
  axios.create({
    baseURL: ENDPOINTS.BASEURL,
    headers: {Authorization: `Bearer ${token}`}
  });
