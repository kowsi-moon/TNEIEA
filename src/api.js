import axios from "axios";

const API = axios.create({
  baseURL: "https://portal.tneiea.in/api",
});

API.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token");

    // Public APIs ku token anuppadha
    if (
      token &&
      config.url !== "/v1/events"
    ) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default API;