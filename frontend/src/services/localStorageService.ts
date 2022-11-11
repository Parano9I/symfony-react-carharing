import { UserInterface } from '../interfaces/user';

export default {
  getToken(tokenName: string): string | null {
    const tokens: string | null = localStorage.getItem(tokenName);

    if (!tokens) return null;

    return JSON.parse(tokens).acces;
  },

  setToken(payload: string, tokenName: string): void {
    localStorage.setItem(tokenName, payload);
  },

  getUser(): UserInterface | null {
    const user: string | null = localStorage.getItem('user');

    if (!user) return null;

    return JSON.parse(user);
  },

  setUser(user: UserInterface): void {
    const userJson = JSON.stringify(user);
    localStorage.setItem('user', userJson);
  },

  removeUser(): void {
    localStorage.removeItem('user;');
  }
};
