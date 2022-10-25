import { ICustomer, IPayLoadItem } from "../../../types/types";
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
    itemAddedToWishList: (state, action: PayloadAction<IPayLoadItem>) => {
      state.wishlist = !action.payload.checked
        ? [...state.wishlist, action.payload.item]
        : state.wishlist;
    },
    itemRemovedFromWishList: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    itemAddedToCart: (state, action) => {},
  },
});

export const customerReducer = customerSlice.reducer;

export const { itemAddedToWishList, itemRemovedFromWishList } =
  customerSlice.actions;
