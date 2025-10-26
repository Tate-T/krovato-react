import { createSlice } from "@reduxjs/toolkit";
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

    }
})
export const { setSurname, setName, setPaternal, setPhone, setComment, setEmail, setPayment, setDelivery, setIsPerson } = basketSlice.actions
export default basketSlice.reducer