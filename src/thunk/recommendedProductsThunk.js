import { createAsyncThunk } from "@reduxjs/toolkit"
import { recommentedProductAPI } from "../api/recommendedProductsAPI"

export const recommentedProductThunk = createAsyncThunk("products/recommentedProduct/fetch",()=>{
    return recommentedProductAPI()
})