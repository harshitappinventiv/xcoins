import axios from "axios";

export const instanceOfAxios = axios.create({
  baseURL: `${process.env.REACT_APP_DOMAIN}`,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});
