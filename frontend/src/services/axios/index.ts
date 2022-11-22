import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAccessToken } from './interceptors/ request/action';
import { refreshTokens } from './user/api';
import { store } from '../../store';
import { useDispatch } from 'react-redux';
import { addTokens, removeTokens, removeUser } from '../../store/slices/user';
import { useAppDispatch } from '../../hooks/reduxHooks';

const httpClient = axios.create({
  baseURL: 'http://localhost:8080/api/',
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'multipart/form-data'
    // 'Access-Control-Allow-Origin': 'http://localhost:8080'
    // 'Access-Control-Allow-Credentials': 'true'
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

let isRefreshing = false;

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
      const respStatus = error.response.status;

      if (respStatus === 401 && !isRefreshing) {
        isRefreshing = true;
        try {
          const tokens = await refreshTokens();
          store.dispatch(addTokens(tokens));
          return httpClient(originalRequest);
        } catch (error) {
          return Promise.reject(error);
        }
      }
      // } else {
      //   store.dispatch(removeUser());
      //   store.dispatch(removeTokens());
      //   window.location.href = '/auth/login';
      // }
    }
    return Promise.reject(error);
  }
);

export default httpClient;
