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
    itemAddedToWishList: (state, action: PayloadAction<any>) => {
      state.wishlist = [...state.wishlist, action.payload.item];
    },
    itemRemovedFromWishList: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    itemAddedToCart: (state, action: PayloadAction<any>) => {
      state.cart = !action.payload.added
        ? [...state.cart, action.payload.item]
        : state.cart.map((item) =>
            item.id === action.payload.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
    },
    itemRemovedFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const customerReducer = customerSlice.reducer;

export const { itemAddedToWishList, itemRemovedFromWishList, itemAddedToCart } =
  customerSlice.actions;
