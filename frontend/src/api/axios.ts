import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";

const api: AxiosInstance =
  axios.create({
    baseURL:
      "http://localhost:5000/api",
  });

api.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig
  ) => {
    const token =
      localStorage.getItem(
        "token"
      );

    if (
      token
    ) {
      config.headers.set(
        "Authorization",
        `Bearer ${token}`
      );
    }

    return config;
  },
  (
    error
  ) =>
    Promise.reject(
      error
    )
);

export default api;