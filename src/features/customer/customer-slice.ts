import { ICustomers, IItemUpdate } from "./../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICartItem } from "../../types/types";

export const initialState: ICustomers = {
  customerList: {
    c11: {
      name: "Customer A",
      cart: [],
      wishlist: [],
    },
    c12: {
      name: "Customer B",
      cart: [],
      wishlist: [],
    },
    c13: {
      name: "Customer C",
      cart: [],
      wishlist: [],
    },
  },
  selectedCustomer: "c11",
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    customerChanged: (customer, action: PayloadAction<string>) => {
      customer.selectedCustomer = action.payload;
    },
    itemToggledToWishList: (customer, action: PayloadAction<string>) => {
      customer.customerList.c11.wishlist =
        !customer.customerList.c11.wishlist.includes(action.payload)
          ? [...customer.customerList.c11.wishlist, action.payload]
          : customer.customerList.c11.wishlist.filter(
              (id) => id !== action.payload
            );
    },
    itemAddedToCart: (customer, action: PayloadAction<ICartItem>) => {
      customer.customerList.c11.cart = !customer.customerList.c11.cart.some(
        (item) => item.productID === action.payload.productID
      )
        ? [...customer.customerList.c11.cart, action.payload]
        : customer.customerList.c11.cart.map((item) =>
            item.productID === action.payload.productID
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
    },
    itemRemovedFromCart: (customer, action: PayloadAction<string>) => {
      customer.customerList.c11.cart = customer.customerList.c11.cart.filter(
        (item) => item.productID !== action.payload
      );
    },
    itemUpdatedInCart: (customer, action: PayloadAction<IItemUpdate>) => {
      customer.customerList.c11.cart = customer.customerList.c11.cart.map(
        (item) =>
          item.productID === action.payload.productID
            ? action.payload.event
              ? { ...item, quantity: item.quantity + 1 }
              : { ...item, quantity: item.quantity - 1 }
            : item
      );
    },
  },
});

export const customerReducer = customerSlice.reducer;
export const {
  itemAddedToCart,
  itemToggledToWishList,
  itemRemovedFromCart,
  itemUpdatedInCart,
  customerChanged,
} = customerSlice.actions;
