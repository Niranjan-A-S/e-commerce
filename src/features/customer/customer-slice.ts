import {
  ICartItemUpdate,
  ICustomers,
  IPayloadCartItem,
  IPayloadItem,
} from "./../../types/types";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICustomers = {
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

    itemToggledToWishList: (customer, action: PayloadAction<IPayloadItem>) => {
      const { productID, selectedCustomer } = action.payload;
      const currentCustomer = customer.customerList[selectedCustomer];

      currentCustomer.wishlist = !currentCustomer.wishlist.includes(productID)
        ? [...currentCustomer.wishlist, productID]
        : currentCustomer.wishlist.filter(
            (productId) => productId !== productID
          );
    },

    itemAddedToCart: (customer, action: PayloadAction<IPayloadCartItem>) => {
      const { cartItem, selectedCustomer } = action.payload;

      const currentCustomer = customer.customerList[selectedCustomer];

      currentCustomer.cart = !currentCustomer.cart.some(
        (item) => item.productID === cartItem.productID
      )
        ? [...currentCustomer.cart, cartItem]
        : currentCustomer.cart.map((item) =>
            item.productID === cartItem.productID
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
    },

    itemRemovedFromCart: (customer, action: PayloadAction<IPayloadItem>) => {
      const { productID, selectedCustomer } = action.payload;

      const currentCustomer = customer.customerList[selectedCustomer];

      currentCustomer.cart = currentCustomer.cart.filter(
        (item) => item.productID !== productID
      );
    },

    itemUpdatedInCart: (customer, action: PayloadAction<ICartItemUpdate>) => {
      const { productID, selectedCustomer, event } = action.payload;

      const currentCustomer = customer.customerList[selectedCustomer];

      currentCustomer.cart = currentCustomer.cart.map((item) =>
        item.productID === productID
          ? event
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
