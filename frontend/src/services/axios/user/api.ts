import {
  UserCreateFuncInterface,
  UserCreateRequestInterface,
  UserLoginResponseInterface
} from './interfaces';
import httpClient from '../index';
import { UserInterface, UserTokensInterface } from '../../../interfaces/user';
import { AxiosError } from 'axios';

export const createUser: UserCreateFuncInterface = async (data) => {
  const response = await httpClient.post('/user', data);
  const result = response.data;

  const user: UserInterface = result.user;
  const tokens: UserTokensInterface = result.authorization;

  return {
    user,
    tokens
  };
};

export const login = async (data: UserLoginResponseInterface) => {
  let response: UserLoginResponseInterface;
  response = await httpClient.post('/user/auth/login');

  return response;
};
