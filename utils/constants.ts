import axios from "axios";

export const instanceOfAxios = axios.create({
  baseURL: `https://preprodapi.xcoins.eu/api`,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
  
});
