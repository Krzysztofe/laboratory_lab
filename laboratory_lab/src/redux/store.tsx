import { configureStore } from "@reduxjs/toolkit";
import reactionsContactSlice from "./storeFeatures/reactionsContactSlice";

export const store = configureStore({
  reducer: {
    reactionsContact: reactionsContactSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;