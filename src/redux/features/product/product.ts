import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";

interface IInitialState {
  loading: boolean;
  productList: Array<IProduct>;
  error: string;
}

const initialState: IInitialState = {
  loading: false,
  productList: [],
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch(
      "https://634fe849df22c2af7b5d6dce.mockapi.io/product"
    );
    const data = await response.json();
    return data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // stockUpdate: (state, action: PayloadAction<any>) => {
    //   state.productList = state.productList.map((product) =>
    //     product.id === action.payload.id
    //       ? {
    //           ...product,
    //           count: product.count - action.payload.count,
    //         }
    //       : product
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Array<IProduct>>) => {
        state.loading = false;
        state.productList = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.productList = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const productReducer = productSlice.reducer;
