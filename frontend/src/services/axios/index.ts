import axios, { AxiosError } from 'axios';
import { getAccessToken } from './interceptors/ request/action';

const httpClient = axios.create({
  baseURL: 'http://localhost:8080/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

httpClient.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    config.headers!.Authorization = token;

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const originalRequest = error.config;
  }
);

export default httpClient;
