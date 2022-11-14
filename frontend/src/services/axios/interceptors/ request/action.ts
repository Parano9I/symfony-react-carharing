import { AxiosHeaders, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import storage from 'redux-persist/lib/storage';
import { store } from '../../../../store';
import { UserTokensInterface } from '../../../../interfaces/user';

export const getAccessToken = (): string => {
  const accessToken: string | undefined =
    store.getState().user.tokens?.access_token;

  if (!accessToken) return '';

  return 'Bearer ' + accessToken;
};
