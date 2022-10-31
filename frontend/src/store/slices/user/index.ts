import { createSlice } from '@reduxjs/toolkit';
import { UserInterface, UserTokensInterface } from '../../../interfaces/user';

interface stateInterface {
  user: UserInterface | null;
  tokens: UserTokensInterface | null;
}

const initialState: stateInterface = {
  user: null,
  tokens: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {},

    removeUser(state) {},

    addTokens(state, action) {},

    removeTokens(state, action) {},

    refreshTokens(state, action) {}
  }
});

export const { addUser, removeUser, addTokens, refreshTokens, removeTokens } =
  userSlice.actions;

export default userSlice.reducer;
