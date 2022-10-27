import { ICartItem } from "./../../../types/types";
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
    itemAddedToWishList: (state, action: PayloadAction<number>) => {
      state.wishlist = [...state.wishlist, action.payload];
    },

    itemRemovedFromWishList: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter((id) => id !== action.payload);
    },

    itemAddedToCart: (state, action: PayloadAction<ICartItem>) => {
      state.cart = !state.cart.includes(action.payload)
        ? [
            {
              ...action.payload,
              quantity: action.payload.quantity + 1,
              stockLeft: action.payload.stockLeft - 1,
            },
          ]
        : [
            ...state.cart,
            {
              ...action.payload,
              stockLeft: action.payload.stockLeft - 1,
            },
          ];
    },
    itemRemovedFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    itemQuantityIncreased: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              stockLeft: item.stockLeft--,
              quantity: item.quantity + 1,
            }
          : item
      );
    },
    itemQuantityDecreased: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              stockLeft: item.stockLeft + 1,
              quantity: item.quantity - 1,
            }
          : item
      );
    },
  },
});

export const customerReducer = customerSlice.reducer;

export const {
  itemAddedToCart,
  itemQuantityIncreased,
  itemQuantityDecreased,
  itemRemovedFromCart,
  itemAddedToWishList,
  itemRemovedFromWishList,
} = customerSlice.actions;
