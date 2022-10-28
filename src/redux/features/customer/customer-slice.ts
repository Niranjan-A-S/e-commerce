import { ICartItem, ICartItemUpdate, ICustomer } from "../../../types/types";
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
    itemAddedToCart: (state, action: PayloadAction<ICartItem>) => {
      state.cart = !state.cart.some((item) => item.id === action.payload.id)
        ? [...state.cart, action.payload]
        : state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
    },
    cartItemUpdated: (state, action: PayloadAction<ICartItemUpdate>) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id && item.quantity
          ? action.payload.event
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
});

export const customerReducer = customerSlice.reducer;

export const { itemToggledToWishList, itemAddedToCart, cartItemUpdated } =
  customerSlice.actions;
