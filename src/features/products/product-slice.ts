import { IItemUpdate, IPayloadProduct } from "./../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import data from "../../data.json";
import { Products } from "../../types";

const initialState: Products = data.products;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productStockUpdated: (state, action: PayloadAction<IItemUpdate>) => {
      const { event, productID } = action.payload;

      state[productID].stockLeft = event
        ? state[productID].stockLeft + 1
        : state[productID].stockLeft - 1;
    },

    productStockRestored: (state, action: PayloadAction<IPayloadProduct>) => {
      const { productID, quantity } = action.payload;

      state[productID].stockLeft = state[productID].stockLeft + quantity;
    },
  },
});

export const { productStockUpdated, productStockRestored } =
  productSlice.actions;

export const productReducer = productSlice.reducer;
