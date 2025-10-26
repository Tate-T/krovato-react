import { createSlice } from "@reduxjs/toolkit";
const initialState={
    products:[]
}

const favoriteSlice = createSlice({
    name: "favorite",
    initialState:initialState,
    reducers: {
      setFavorites(state, action) {
        state.products = action.payload;
      },
      addFavorite(state, action) {
        if (!state.products.find(item => item.id === action.payload.id)) {
          state.products.push(action.payload);
        }
      },
      removeFavorite(state, action) {
        state.products = state.products.filter(item => item.id !== action.payload);
      },
      clearFavorites(state) {
        state.products = [];
      },
    },
  });
  
  export const { setFavorites, addFavorite, removeFavorite, clearFavorites } = favoriteSlice.actions;
  export const favoriteReducer = favoriteSlice.reducer;