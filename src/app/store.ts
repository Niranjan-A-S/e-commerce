import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { productReducer } from "../features/products/product-slice";
import { customerReducer } from "../features/customer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
