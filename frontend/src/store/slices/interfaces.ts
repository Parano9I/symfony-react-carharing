import { UserInterface, UserTokensInterface } from '../../interfaces/user';

export interface UserStateInterface {
  user: UserInterface | null;
  tokens: UserTokensInterface | null;
}
