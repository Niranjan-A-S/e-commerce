import { ICart } from "./../../../types/types";
import { ICustomer } from "../../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    itemToggledToWishList: (state, action: PayloadAction<number>) => {
      state.wishlist = !state.wishlist.includes(action.payload)
        ? [...state.wishlist, action.payload]
        : state.wishlist.filter((id) => id !== action.payload);
    },
    itemAddedToCart: (state, action: PayloadAction<ICart>) => {
      state.cart = [];
    },
  },
});

export const customerReducer = customerSlice.reducer;

export const { itemToggledToWishList, itemAddedToCart } = customerSlice.actions;
