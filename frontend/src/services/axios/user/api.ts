import {
  UserCreateRequestInterface,
  UserLoginResponseInterface
} from './interfaces';
import httpClient from '../index';

export const createUser = async (data: UserCreateRequestInterface) => {
  const response = await httpClient.post('/user', data);

  let result: UserLoginResponseInterface = JSON.parse(response.data);

  return result;
};

export const login = async (data: UserLoginResponseInterface) => {
  let response: UserLoginResponseInterface;
  response = await httpClient.post('/user/auth/login');

  return response;
};
