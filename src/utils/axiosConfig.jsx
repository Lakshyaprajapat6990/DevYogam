// import axios from "axios";
// import { baseURL } from "../utils/constant/Constant";

// const accessToken = sessionStorage.getItem("token");
// const axiosInstance = axios.create({
//   baseURL: baseURL,
//   headers: {
//     Accept: "application/json",
//     "Content-Type":"application/json",
//     // Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//   },
//   withCredentials: true,
//   credentials: "include",
//   timeout: "300000",
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = sessionStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     } else {
//       delete config.headers.Authorization;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default axiosInstance;


import axios from "axios";
import { baseURL } from "../utils/constant/Constant";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,  // agar cookies use kar rahe ho
  timeout: 300000,        // number hona chahiye
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;