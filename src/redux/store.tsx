import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./teams-slice";
export const store = configureStore({
  reducer: {
    teamsReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;