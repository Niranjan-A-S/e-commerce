import { ICustomer } from "../../../types/types";
import { createSlice } from "@reduxjs/toolkit";

export const initialState: Array<ICustomer> = [
  {
    name: "Roman Reigns",
    cart: [],
    wishlist: [],
  },
  {
    name: "Dean Ambros",
    cart: [],
    wishlist: [],
  },
  {
    name: "Dean Ambros",
    cart: [],
    wishlist: [],
  },
];

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    // customerChanged: (state, action: PayloadAction<string>) => {
    //   state.customerA =
    //     action.payload === state.customerB.name
    //       ? state.customerB
    //       : action.payload === state.customerC.name
    //       ? state.customerC
    //       : state.customerA;
    // },
  },
});

export const customerReducer = customerSlice.reducer;
