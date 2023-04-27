import { configureStore } from "@reduxjs/toolkit";
import { reactionsApiSlice } from "../services/apiSlice";
import tableReactionsSlice from "./storeFeatures/tableReactionsSlice";
import navHomeSlice from "./storeFeatures/navHomeSlice";
import formReactionSlice from "./storeFeatures/formReactionSlice";


export const store = configureStore({
  reducer: {
    formReaction: formReactionSlice,
    tableReactions: tableReactionsSlice,
    navHome:navHomeSlice,
    [reactionsApiSlice.reducerPath]: reactionsApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(reactionsApiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
