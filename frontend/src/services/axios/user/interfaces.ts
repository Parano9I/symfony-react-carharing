import { UserInterface, UserTokensInterface } from '../../../interfaces/user';

export interface UserCreateRequestInterface {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
}

export interface UserLoginRequestInterface {
  email: string;
  password: string;
}

export interface UserLoginResponseInterface {
  user: UserInterface;
  token: UserTokensInterface;
}
