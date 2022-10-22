import { IPayLoadWishList } from "./../../../types/types";
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
    addToWishList: (state, action: PayloadAction<IPayLoadWishList>) => {
      state.wishlist = action.payload.checked
        ? [...state.wishlist, action.payload.item]
        : state.wishlist;
    },
    // customerChanged: (state, action: PayloadAction<string>) => {
    //   state.customerA =
    //     action.payload === state.customerB.name
    //       ? state.customerB
    //       : action.payload === state.customerC.name
    //       ? state.customerC
    //       : state.customerA;
    // },
  },
});

export const customerReducer = customerSlice.reducer;
