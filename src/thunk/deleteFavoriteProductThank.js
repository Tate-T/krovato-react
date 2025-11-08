import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteFavoriteProductAPI } from "../api/deleteFavoriteProductAPI";

export const deleteFavoriteProductThunk = createAsyncThunk("products/Favorite/delete",(id) => {
     return deleteFavoriteProductAPI(id)
})