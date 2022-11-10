export interface UserInterface {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}
export interface UserTokensInterface {
  type: string;
  access_token: string;
  refresh_token: string;
}
