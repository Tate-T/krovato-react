import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFavortieAPI } from "../api/getFavoriteAPI";

export const getFavoriteThunk = createAsyncThunk("products/Favorite/fetch",()=>{

    return getFavortieAPI()
})