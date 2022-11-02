import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { productReducer } from "../features/product/product-slice";
import { customerReducer } from "../features/customer";
import { productStoreReducer } from "../features/product-store";

export const store = configureStore({
  reducer: {
    product: productReducer,
    customer: customerReducer,
    productStore: productStoreReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export const customUseSelector: TypedUseSelectorHook<RootState> = useSelector;
