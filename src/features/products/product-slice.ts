import { IItemUpdate } from "./../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import data from "../../data.json";
import { Products } from "../../types";

const initialState: Products = data.products;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productStockUpdated: (state, action: PayloadAction<IItemUpdate>) => {
      state[action.payload.productID].stockLeft = action.payload.event
        ? state[action.payload.productID].stockLeft + 1
        : state[action.payload.productID].stockLeft - 1;
    },
    productStockRestored: (state, action: PayloadAction<string>) => {
      state[action.payload].stockLeft = state[action.payload].stock;
    },
  },
});

export const { productStockUpdated, productStockRestored } =
  productSlice.actions;

export const productReducer = productSlice.reducer;
