import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInterface, UserTokensInterface } from '../../../interfaces/user';
import { UserStateInterface } from '../interfaces';

const initialState: UserStateInterface = {
  user: null,
  tokens: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserInterface>) {
      state.user = action.payload;
    },

    removeUser(state) {
      state.user = null;
    },

    addTokens(state, action: PayloadAction<UserTokensInterface>) {
      state.tokens = action.payload;
    },

    removeTokens(state) {
      state.tokens = null;
    },

    refreshTokens(state, action: PayloadAction<UserTokensInterface>) {}
  }
});

export const { addUser, removeUser, addTokens, refreshTokens, removeTokens } =
  userSlice.actions;

export default userSlice.reducer;
