import { AxiosHeaders, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

export const getAccessToken = (): string => {
  const token = null;

  if (token) {
    return 'Bearer ' + token;
  }

  return '';
};
