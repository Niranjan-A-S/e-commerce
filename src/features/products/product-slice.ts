import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import data from "../../data.json";
import { Products } from "../../types";

const initialState: Products = data.products;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productStockUpdated: (state, action: PayloadAction<string>) => {
      state[action.payload].stockLeft -= 1;
    },
  },
});

export const { productStockUpdated } = productSlice.actions;
export const productReducer = productSlice.reducer;
