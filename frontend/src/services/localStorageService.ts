export default {
  getAccessToken(): string | null {
    const tokens = localStorage.getItem('tokens');

    if (!tokens) return null;

    return JSON.parse(tokens).acces;
  }
};
