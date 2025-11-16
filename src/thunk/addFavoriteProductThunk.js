import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFavoriteProductAPI } from "../api/addFavoriteProductAPI";

export const addFavoriteProductThunk = createAsyncThunk("products/Favorite/add",({title,alt,width,height,length,inStock,price,imageSrc,oldPrice}) => {
    return addFavoriteProductAPI({title,alt,width,height,length,inStock,price,imageSrc,oldPrice})
})