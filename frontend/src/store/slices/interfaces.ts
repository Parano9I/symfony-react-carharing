import { UserInterface, UserTokensInterface } from '../../interfaces/user';

export interface UserStateInterface {
  user?: UserInterface;
  tokens?: UserTokensInterface;
}
