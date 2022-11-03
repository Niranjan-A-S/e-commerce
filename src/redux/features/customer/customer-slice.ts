import { ICustomer } from "../../../types/types";
import { createSlice } from "@reduxjs/toolkit";

export const initialState: ICustomer = {
  id: 1,
  name: "Roman Reigns",
  cart: [],
  wishlist: [],
};
// },
// {
//   id: 2,
//   name: "Dean Ambros",
//   cart: [],
//   wishlist: [],
// },
// {
//   id: 3,
//   name: "Dean Ambros",
//   cart: [],
//   wishlist: [],
// }

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    itemToggledToWishList: () => {},
  },
});

export const customerReducer = customerSlice.reducer;
