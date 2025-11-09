import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsAPI } from "../api/getProductsAPI";

const productsThunk=createAsyncThunk("products/Producyts/fetch",() => {
    return getProductsAPI()
})
export default productsThunk