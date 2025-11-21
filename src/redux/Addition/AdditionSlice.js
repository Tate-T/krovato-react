import { createSlice } from "@reduxjs/toolkit"
import { AdditionAPIThunk } from "../../thunk/AdditionAPIThunk"

const initialState = {
    AdditionProduct : []
}

const AdditionSlice = createSlice({
    name : "Addition",
    initialState: initialState,
    reducers:{
    },
    extraReducers:(builder) => {
        builder
        .addCase(AdditionAPIThunk.fulfilled,(state,action)=>{
            state.AdditionProduct = action.payload
        })
    }
})

export const AdditionAPIReducer = AdditionSlice.reducer