import { customerReducer } from "../features/customer/customer-slice";
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../features/products";

export const store = configureStore({
  reducer: {
    products: productReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
