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
      customer.customerList[action.payload.selectedCustomer].wishlist =
        !customer.customerList[
          action.payload.selectedCustomer
        ].wishlist.includes(action.payload.productID)
          ? [
              ...customer.customerList[action.payload.selectedCustomer]
                .wishlist,
              action.payload.productID,
            ]
          : customer.customerList[
              action.payload.selectedCustomer
            ].wishlist.filter(
              (productID) => productID !== action.payload.productID
            );
    },
    itemAddedToCart: (customer, action: PayloadAction<IPayloadCartItem>) => {
      customer.customerList[action.payload.selectedCustomer].cart =
        !customer.customerList[action.payload.selectedCustomer].cart.some(
          (item) => item.productID === action.payload.cartItem.productID
        )
          ? [
              ...customer.customerList[action.payload.selectedCustomer].cart,
              action.payload.cartItem,
            ]
          : customer.customerList[action.payload.selectedCustomer].cart.map(
              (item) =>
                item.productID === action.payload.cartItem.productID
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
            );
    },
    itemRemovedFromCart: (customer, action: PayloadAction<IPayloadItem>) => {
      customer.customerList[action.payload.selectedCustomer].cart =
        customer.customerList[action.payload.selectedCustomer].cart.filter(
          (item) => item.productID !== action.payload.productID
        );
    },
    itemUpdatedInCart: (customer, action: PayloadAction<ICartItemUpdate>) => {
      debugger;
      customer.customerList[action.payload.selectedCustomer].cart =
        customer.customerList[action.payload.selectedCustomer].cart.map(
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
