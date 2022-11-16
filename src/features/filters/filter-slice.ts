import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilters } from "../../types";

const initialState: IFilters = {
  sortValue: "highToLow",
  view: "grid",
};

export const FilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    sortValueChanged: (state, action: PayloadAction<string>) => {
      state.sortValue = action.payload;
    },
    viewChanged: (state, action: PayloadAction<string>) => {
      state.view = action.payload;
    },
  },
});

export const { sortValueChanged, viewChanged } = FilterSlice.actions;

export const filterReducer = FilterSlice.reducer;
