import { createSlice } from "@reduxjs/toolkit";
import { getProductsThunk } from "./catalogThunks";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    filtered: []
  },

  reducers: {
    filterItems(state, action) {
      state.filtered = action.payload;
    }
  },

  extraReducers(builder) {
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      console.log(action.payload);

      state.items = action.payload;
      state.filtered = action.payload;
    });
  }
});

export const { filterItems } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;