import { createSlice } from "@reduxjs/toolkit";

import { IProductsInitialState } from "./../../../types/types";
import data from "../../../data.json";

const initialState: IProductsInitialState = data;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const productReducer = productSlice.reducer;
