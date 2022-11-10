import {
  ICartItemUpdate,
  ICustomers,
  IPayloadCartItem,
  IPayloadItem,
} from "./../../types/types";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

    itemToggledToWishList: (customer, action: PayloadAction<IPayloadItem>) => {
      const { productID, selectedCustomer } = action.payload;

      customer.customerList[selectedCustomer].wishlist = !customer.customerList[
        selectedCustomer
      ].wishlist.includes(productID)
        ? [...customer.customerList[selectedCustomer].wishlist, productID]
        : customer.customerList[selectedCustomer].wishlist.filter(
            (productId) => productId !== productID
          );
    },

    itemAddedToCart: (customer, action: PayloadAction<IPayloadCartItem>) => {
      const { cartItem, selectedCustomer } = action.payload;

      customer.customerList[selectedCustomer].cart = !customer.customerList[
        selectedCustomer
      ].cart.some((item) => item.productID === cartItem.productID)
        ? [...customer.customerList[selectedCustomer].cart, cartItem]
        : customer.customerList[selectedCustomer].cart.map((item) =>
            item.productID === cartItem.productID
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
    },

    itemRemovedFromCart: (customer, action: PayloadAction<IPayloadItem>) => {
      const { productID, selectedCustomer } = action.payload;

      customer.customerList[selectedCustomer].cart = customer.customerList[
        selectedCustomer
      ].cart.filter((item) => item.productID !== productID);
    },

    itemUpdatedInCart: (customer, action: PayloadAction<ICartItemUpdate>) => {
      const { productID, selectedCustomer, event } = action.payload;

      customer.customerList[selectedCustomer].cart = customer.customerList[
        selectedCustomer
      ].cart.map((item) =>
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
