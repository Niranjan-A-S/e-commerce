import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { customerReducer } from "../features/users";

export const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export const customUseSelector: TypedUseSelectorHook<RootState> = useSelector;
