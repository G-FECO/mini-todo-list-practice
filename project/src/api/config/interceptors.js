import axios from "axios";

export function setInterceptors() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_DATABASE_BASE_URL
  });
  instance.interceptors.request.use(
    config => config,
    error => Promise.reject(error.response)
  );
  instance.interceptors.response.use(
    config => config,
    error => Promise.reject(error.response)
  );
  return instance;
}
