import { createSlice } from "@reduxjs/toolkit";
import { getFavoriteThunk } from "../../thunk/getFivoriteThunk";
import { addFavoriteProductThunk } from "../../thunk/addFavoriteProductThunk";
import { deleteFavoriteProductThunk } from "../../thunk/deleteFavoriteProductThank";
const initialState={
  favoriteProducts:[]
}

const favoriteSlice = createSlice({
    name: "favorite",
    initialState:initialState,
    reducers: {
    },
    extraReducers:( builder ) => {
      builder
      .addCase(getFavoriteThunk.fulfilled,(state,action)=>{
        state.favoriteProducts = action.payload
      })
      .addCase(addFavoriteProductThunk.fulfilled,(state,action) => {
        state.favoriteProducts.push(action.payload)
      })
      .addCase(deleteFavoriteProductThunk.fulfilled,(state,action) => {
        state.favoriteProducts = state.favoriteProducts.filter(item => item.id !== action.payload);
      })
    }
  });
export const favoriteReducer = favoriteSlice.reducer;