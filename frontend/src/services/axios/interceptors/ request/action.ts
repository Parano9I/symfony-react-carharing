import localStorageService from '../../../localStorageService';
import { AxiosHeaders, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

export const getAccessToken = (): string => {
  const token = localStorageService.getAccessToken();

  if (token) {
    return 'Bearer ' + token;
  }

  return '';
};
