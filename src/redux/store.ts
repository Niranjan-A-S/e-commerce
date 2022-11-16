import { filterReducer } from "./../features/filters/filter-slice";
import { configureStore } from "@reduxjs/toolkit";
import { customerReducer } from "../features/customer";
import { productReducer } from "../features/products";

export const store = configureStore({
  reducer: {
    products: productReducer,
    customer: customerReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
