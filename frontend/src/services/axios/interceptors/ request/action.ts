import localStorageService from '../../../localStorageService';
import { AxiosHeaders, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

export const getAccessToken = (): string => {
  const token = localStorageService.getToken('accessToken');

  if (token) {
    return 'Bearer ' + token;
  }

  return '';
};
