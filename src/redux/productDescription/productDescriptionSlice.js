import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import lunarAshStyle from '../../images/product-card/palitra/lunar-ash.png'
import lunarBeigeStyle from '../../images/product-card/palitra/lunar-beige.png'
import lunarChocolateStyle from '../../images/product-card/palitra/lunar-chocolate.png'
import lunarCoffeeStyle from '../../images/product-card/palitra/lunar-coffee.png'
import lunarGreyStyle from '../../images/product-card/palitra/lunar-grey.png'
import lunarDesertStyle from '../../images/product-card/palitra/lunar-desert.png'
import lunarForestStyle from '../../images/product-card/palitra/lunar-forest.png'
import lunarMustardStyle from '../../images/product-card/palitra/lunar-mustard.png'
import lunarMintStyle from '../../images/product-card/palitra/lunar-mint.png'
import lunarIvoryStyle from '../../images/product-card/palitra/lunar-ivory.png'
import lunarLatteStyle from '../../images/product-card/palitra/lunar-latte.png'
import lunarNavyStyle from '../../images/product-card/palitra/lunar-navy.png'
const stylesDescription = [
    {img:lunarAshStyle , alt:"ash-style"},
    {img:lunarBeigeStyle , alt:"beige-style"},
    {img:lunarChocolateStyle , alt:"chocolate-style"},
    {img:lunarCoffeeStyle , alt:"coffee-style"},
    {img:lunarGreyStyle , alt:"grey-style"},
    {img:lunarDesertStyle , alt:"desert-style"},
    {img:lunarForestStyle , alt:"forest-style"},
    {img:lunarMustardStyle , alt:"mustard-style"},
    {img:lunarMintStyle , alt:"mint-style"},
    {img:lunarIvoryStyle , alt:"ivory-style"},
    {img:lunarLatteStyle , alt:"latte-style"},
    {img:lunarNavyStyle , alt:"navy-style"}
]
const API_URL = "https://691f311abb52a1db22c0d9b5.mockapi.io"
export const getRespond = createAsyncThunk("productDescription/getRespond" , async () => {
try{
    const res = await fetch(`${API_URL}/respond`)
    const data = await res.json()
    return data;
} catch(error){
    console.log("Error", error )
}
})
export const addRespond = createAsyncThunk("productDescription/postRespond" , async(respond)=> {
    const newRespond = {
        name:respond.name,
        email:respond.email,
        respond:respond.respond,
        rating: respond.rating
    }
    try{
     const res =   await fetch(`${API_URL}/respond`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newRespond)
        })
        const data = await res.json()
        return data;
    }catch(error){
        console.log("Error" , error)
    }
})
const ProductDescriptionSlice = createSlice({
    name:"productDescription",
    initialState:{
        styles:stylesDescription,
        selectedStyle:null,
        infoRespond:[],
        loading:false,
        error:null,
        rating:0
    },
    reducers:{
        openModal:(state , action) => {
        state.selectedStyle = action.payload
        },
        closeModal:(state) =>{
            state.selectedStyle = null;
        },
        setRating: (state, action) => {
            state.rating = action.payload; 
          }
    },
    extraReducers: (builder) =>{
        builder
    .addCase(getRespond.pending , (state , action) => {
        state.loading = true
    })
    .addCase(getRespond.fulfilled , (state , action) => {
        state.loading = false 
        state.infoRespond = action.payload;
    })
    .addCase(getRespond.rejected , (state , action) => {
        state.error = action.error.message
    })
    .addCase(addRespond.fulfilled , (state , action) => {
        state.infoRespond.push(action.payload)
    })
    }
})
export const {openModal , closeModal , setRating  } = ProductDescriptionSlice.actions
export default ProductDescriptionSlice.reducer