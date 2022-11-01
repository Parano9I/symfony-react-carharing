import {
  combineReducers,
  configureStore,
  ReducerFromReducersMapObject
} from '@reduxjs/toolkit';
import userReducer from './slices/user';

export const store = configureStore({
  reducer: {
    user: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
