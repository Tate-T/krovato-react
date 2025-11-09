import { createSlice } from "@reduxjs/toolkit"
import productsThunk from "../../thunk/ProductsThunk"

const initialState={
    products : [],
}

const productsSlice=createSlice({
    name:"products",
    initialState:initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder
        .addCase(productsThunk.fulfilled, (state,action) => {
            state.products = action.payload
        })
    }
})

export const productsReducer = productsSlice.reducer
