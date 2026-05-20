import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";

const api: AxiosInstance =
  axios.create({
<<<<<<< HEAD
    baseURL:
"https://your-backend.onrender.com/api",
=======
 baseURL:
"https://smart-lead-dshboard.onrender.com/api",
>>>>>>> 81876968cfa6a7b343e6463632b4d99720acfb3b
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
