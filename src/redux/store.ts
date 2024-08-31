import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
