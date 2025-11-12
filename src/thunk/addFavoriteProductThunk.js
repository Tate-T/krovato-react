import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFavoriteProductAPI } from "../api/addFavoriteProductAPI";

export const addFavoriteProductThunk = createAsyncThunk("products/Favorite/add",({title,alt,size,inStock,price,imageSrc,oldPrice}) => {
    return addFavoriteProductAPI({title,alt,size,inStock,price,imageSrc,oldPrice})
})