import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentProduct: {},
    count: 1,
    totalCurrentSum: 0,
    totalOldSum: 0,
    smallImg :[]
}
const ProductItemSlice = createSlice({
    name:"ProductItem",
    initialState:initialState,
    reducers:{
        getProductItem(state,action) {
            state.currentProduct = action.payload;
            state.totalOldSum = action.payload.oldPrice
            state.totalCurrentSum = action.payload.currentPrice
            state.smallImg = action.payload.smallBedImage
        },
        AddToCount(state,action){
            state.count += action.payload;
            state.totalOldSum = state.currentProduct.oldPrice * state.count
            state.totalCurrentSum = state.currentProduct.currentPrice * state.count
        },
        DeleteFromCount(state,action){
            if(state.count == 1) {
                alert("Дальше видалення неможливе")
            }else{
                state.count -= action.payload;
                state.totalOldSum = state.currentProduct.oldPrice * state.count
                state.totalCurrentSum = state.currentProduct.currentPrice * state.count
            }
        }
    }
})
export const ProductItemReducer = ProductItemSlice.reducer

export const {getProductItem,AddToCount,DeleteFromCount} = ProductItemSlice.actions