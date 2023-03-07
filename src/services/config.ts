import axios from "axios";

export const baseUrl = "http://localhost:8000";

export const axiosWithAuth = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `${localStorage.getItem("access_token")}`,
  },
});

export const axiosWithoutAuth = axios.create({
  baseURL: baseUrl,
});
