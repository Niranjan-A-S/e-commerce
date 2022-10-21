import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";

const initialState: Array<IProduct> = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});
