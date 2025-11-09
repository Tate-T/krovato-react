import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const sendOrder = createAsyncThunk("basket/sendOrder", async (order, { rejectWithValue }) => {
    try {
        const res = await axios.post("https://68fe10e87c700772bb12b197.mockapi.io/order", order)
        return res.data;
    } catch (e) {
        return rejectWithValue(e.res.data || "Помилка сервера")
    }
})
const basketSlice = createSlice({
    name: "basket",
    initialState: {
        surname: "",
        name: "",
        paternal: "",
        phone: "",
        email: "",
        comment: "",
        payment: "",
        delivery: "",
        isPerson: false,
        status:"loading",
         error:null
    },
    reducers: {
        setSurname: (state, action) => {
            state.surname = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPaternal: (state, action) => {
            state.paternal = action.payload
        },
        setPhone: (state, action) => {
            state.phone = action.payload
        },
        setComment: (state, action) => {
            state.comment = action.payload
        },
        setPayment: (state, action) => {
            state.payment = action.payload
        },
        setDelivery: (state, action) => {
            state.delivery = action.payload
        },
        setIsPerson: (state, action) => {
            state.isPerson = action.payload
        },
    },
    extraReducers: (builder) => {
     builder
     .addCase(sendOrder.pending , (state) => {
        state.status = "loading"
        state.error = null
     })
     .addCase(sendOrder.fulfilled , (state ) => {
        state.status = "fulfilled"
     })
     .addCase(sendOrder.rejected , (state , action) => {
        state.status = "rejected"
        state.error = action.error.message
     })
    }
})
export const { setSurname, setName, setPaternal, setPhone, setComment, setEmail, setPayment, setDelivery, setIsPerson } = basketSlice.actions
export default basketSlice.reducer