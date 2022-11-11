import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInterface, UserTokensInterface } from '../../../interfaces/user';
import { UserStateInterface } from '../interfaces';
import localStorageService from '../../../services/localStorageService';

const initialState: UserStateInterface = {
  user: null,
  tokens: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserInterface>) {
      const user = action.payload;

      state.user = user;
      localStorageService.setUser(user);
    },

    removeUser(state) {
      state.user = null;
      localStorageService.removeUser();
    },

    addTokens(state, action: PayloadAction<UserTokensInterface>) {},

    removeTokens(state) {},

    refreshTokens(state, action: PayloadAction<UserTokensInterface>) {}
  }
});

export const { addUser, removeUser, addTokens, refreshTokens, removeTokens } =
  userSlice.actions;

export default userSlice.reducer;
