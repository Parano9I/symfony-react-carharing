export interface UserInterface {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}
export interface UserTokenInterface {
  type: string;
  access_token: string;
  refresh_token: string;
}
