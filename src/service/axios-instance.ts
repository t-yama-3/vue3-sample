import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  config.baseURL = import.meta.env.VITE_API_BASE_URL;
  config.headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + 'dummy-token',
  };
  config.responseType = 'json';
  config.timeout = 3000;
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response.data);
    console.log(response.status);
    return response;
  },
  (error: AxiosError) => {
    console.log(error.code);
    console.log(error.message);
    console.log(error.response?.status);
    return Promise.reject(error);
  },
);

export default axiosInstance;
