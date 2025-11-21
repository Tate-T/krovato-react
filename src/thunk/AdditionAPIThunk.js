import { createAsyncThunk } from "@reduxjs/toolkit";
import { AdditionAPI } from "../api/AdditionAPI";

export const AdditionAPIThunk = createAsyncThunk("products/ProductAPI/fetch",()=>{
    return AdditionAPI()
})