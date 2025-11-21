import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentProduct: {},
    count: 1,
    totalCurrentSum: 0,
    totalOldSum: 0,
    smallImg :[],
    currentImageIndex: 0
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
            state.currentImageIndex = 0
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
        },
        nextImage(state){
            if (state.smallImg.length === 0) return
            state.currentImageIndex =
              (state.currentImageIndex + 1) % state.smallImg.length
        },
        prevImage(state) {
            if (state.smallImg.length === 0) return
            state.currentImageIndex =
              (state.currentImageIndex - 1 + state.smallImg.length) %
              state.smallImg.length
          },
          selectImage(state, action) {
            state.currentImageIndex = action.payload
          },
    }
})
export const ProductItemReducer = ProductItemSlice.reducer

export const {getProductItem,AddToCount,DeleteFromCount , nextImage , prevImage , selectImage} = ProductItemSlice.actions