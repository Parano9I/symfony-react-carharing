import {
  UserCreateFuncInterface,
  UserLoginResponseInterface
} from './interfaces';
import httpClient from '../index';
import { UserInterface, UserTokensInterface } from '../../../interfaces/user';
import { store } from '../../../store';

export const createUser = async (
  data: FormData
): Promise<UserLoginResponseInterface> => {
  const response = await httpClient.post('/user', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  const result = response.data;

  const user: UserInterface = result.user;
  const tokens: UserTokensInterface = result.authorization;

  return {
    user,
    tokens
  };
};

export const login = async (
  data: FormData
): Promise<UserLoginResponseInterface> => {
  const response = await httpClient.post('/auth/login', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  const result = response.data;

  const user: UserInterface = result.user;
  const tokens: UserTokensInterface = result.authorization;

  return {
    user,
    tokens
  };
};

export const logout = async () => {
  const response = await httpClient.get('/auth/logout');
};

export const refreshTokens = async (): Promise<UserTokensInterface> => {
  const refreshToken = store.getState().user.tokens?.refresh_token ?? '';
  const response = await httpClient.post('/token/refresh', {
    params: {
      refresh_token: refreshToken
    }
  });
  const result: UserTokensInterface = response.data;

  return result;
};
