import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInterface, UserTokensInterface } from '../../../interfaces/user';
import { UserStateInterface } from '../interfaces';

const initialState: UserStateInterface = {
  user: undefined,
  tokens: undefined
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserInterface>) {
      state.user = action.payload;
      console.log(state);
    },

    removeUser(state) {},

    addTokens(state, action: PayloadAction<UserTokensInterface>) {},

    removeTokens(state) {},

    refreshTokens(state, action: PayloadAction<UserTokensInterface>) {}
  }
});

export const { addUser, removeUser, addTokens, refreshTokens, removeTokens } =
  userSlice.actions;

export default userSlice.reducer;
