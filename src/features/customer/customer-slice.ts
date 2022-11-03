import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICartItem, ICustomer } from "../../types/types";

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

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    itemToggledToWishList: (state, action: PayloadAction<string>) => {
      state.wishlist = !state.wishlist.includes(action.payload)
        ? [...state.wishlist, action.payload]
        : state.wishlist.filter((id) => id !== action.payload);
    },
    itemAddedToCart: (state, action: PayloadAction<ICartItem>) => {
      state.cart = !state.cart.some(
        (item) => item.productID === action.payload.productID
      )
        ? [...state.cart, action.payload]
        : state.cart.map((item) =>
            item.productID === action.payload.productID
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
    },
  },
});

export const customerReducer = customerSlice.reducer;
export const { itemAddedToCart, itemToggledToWishList } = customerSlice.actions;
