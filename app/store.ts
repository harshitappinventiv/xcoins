import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import counterReducer from "../feature/counter/counterSlice";

const store = configureStore({
  reducer: { counter: counterReducer },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
