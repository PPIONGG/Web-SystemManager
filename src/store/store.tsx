import { configureStore } from "@reduxjs/toolkit";
import { registerSlice } from "./register";

export const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
