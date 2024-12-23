import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { TOKEN } from "./token";

export const baseURL = "https://taxi.aralhub.uz:8000/";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use((config) => {
  const token = TOKEN.getAccessToken();
  config.headers["Authorization"] = token ? `Bearer ${token}` : "";
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;
    if (error.response?.status === 401) {
      originalRequest._retry = true;
      try {
        // Создаем новый экземпляр axios без интерцепторов для запроса обновления токена
        const refreshAxios = axios.create({ baseURL });
        const newToken = await refreshAxios.post<any>(
          "user/auth/token/refresh/",
          {
            refresh: TOKEN.getRefreshToken(),
          }
        );
        TOKEN.setAccessToken(newToken.data.data.token.access);
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${newToken.data.data.token.access}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        TOKEN.removeAccessToken();
        return Promise.reject(refreshError);
      }
    }
    // return Promise.reject(error)
  }
);
