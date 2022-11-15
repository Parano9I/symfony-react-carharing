import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAccessToken } from './interceptors/ request/action';
import { refreshTokens } from './user/api';
import { store } from '../../store';
import { useDispatch } from 'react-redux';
import { addTokens } from '../../store/slices/user';

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
  async (error: AxiosError) => {
    const originalRequest: AxiosRequestConfig | undefined = error.config;

    if (
      originalRequest &&
      originalRequest?.url !== '/auth/login' &&
      error.response
    ) {
      let retry = false;
      if (error.response.status === 401 && !retry) {
        retry = true;
        try {
          const tokens = await refreshTokens();
          const dispatch = useDispatch();
          dispatch(addTokens(tokens));

          return httpClient(originalRequest);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default httpClient;
