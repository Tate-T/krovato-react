import { createSlice } from "@reduxjs/toolkit"
import { recommentedProductThunk } from "../../thunk/recommendedProductsThunk"

const initialState = {
    recommendedProduct : []
}

const recommendedProductSlice = createSlice({
    name: "recommendedProduct",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(recommentedProductThunk.fulfilled,(state,action)=>{
            state.recommendedProduct = action.payload
        })
    }
})

export const recommendedProductReducer = recommendedProductSlice.reducer