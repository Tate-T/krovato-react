import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteFromCart } from "../basketModal/basketModalSlice";
import axios from "axios"
const API_URL = "https://68fe10e87c700772bb12b197.mockapi.io/goods"
const validPromoCodes = {
  DISCOUNT10: 10,
  SPRING20: 20,
  FREESHIP: 0,
}
export const fetchBasket = createAsyncThunk(
  "basket/fetchBasket",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(API_URL);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Не вдалося завантажити товари");
    }
  }
);
export const addToBasket = createAsyncThunk(
  "basket/addToBasket",
  async (product, thunkAPI) => {
    try {
      const res = await axios.post(API_URL, product);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Не вдалося додати товар");
    }
  }
);
export const removeProductEverywhere = createAsyncThunk(
  "basket/removeProductEverywhere",
  async (id, thunkAPI) => {
    await thunkAPI.dispatch(deleteFromCart(id));
    return id; 
  }
);
export const deleteFromBasket = createAsyncThunk(
  "basket/deleteFromBasket",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue("Не вдалося видалити товар");
    }
  }
);
const basketListSlice = createSlice({
  name: "basketlist",
  initialState: {
    items: JSON.parse(localStorage.getItem("activeProducts")) || [],
    counts: JSON.parse(localStorage.getItem("basketCounts")) || [],
    discount: Number(localStorage.getItem("discountPercent")) || 0,
    promoMessage: "",
    status: "idle"
  },
  reducers: {
    addItemCount: (state, action) => {
      const index = action.payload
      state.counts[index] = (state.counts[index] || 0) + 1
      localStorage.setItem("basketCounts", JSON.stringify(state.counts));
    },
    subtractItemCount: (state, action) => {
      const index = action.payload
      if (state.counts[index] > 1) {
        state.counts[index]--
      } else {
        state.counts[index] = 1
      }
      localStorage.setItem("basketCounts", JSON.stringify(state.counts));
    },
    applyPromo: (state, action) => {
      const code = action.payload.trim().toUpperCase()
      if (state.items.length === 0) {
        state.discount = 0
        state.promoMessage = "Товарів немає"
        return
      }
      if (validPromoCodes.hasOwnProperty(code)) {
        const discount = validPromoCodes[code]
        state.discount = discount
        state.promoMessage = discount > 0 ? `Промокод застосовано! Знижка ${discount}` : "Промокод звстосовано! Безкоштовна доставка"
      } else if (!code) {
        state.promoMessage = "Порожнє поле промокоду"
      } else {
        state.discount = 0
        state.promoMessage = "Недійсний промокод"
      }
    },
    clearBasket:(state , action)=>{
      state.items = []
      state.counts = []
      localStorage.removeItem("activeProducts");
      localStorage.removeItem("basketCounts");
    },
    syncBasket: (state, action) => {
      state.items = action.payload;
      state.counts = action.payload.map(item => Number(item.quantity) || 1);
  
      localStorage.setItem("activeProducts", JSON.stringify(state.items));
      localStorage.setItem("basketCounts", JSON.stringify(state.counts));
    }, 
    loadFromStorage(state, action) {
      state.items = action.payload.items || [];
      state.counts = action.payload.counts || [];
  }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBasket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBasket.fulfilled, (state, action) => {
        state.status = "succeeded";
        const localItems = JSON.parse(localStorage.getItem("activeProducts"));
        if (!localItems || localItems.length === 0) {
          state.items = action.payload;
          state.counts = action.payload.map(() => 1);
          localStorage.setItem("activeProducts", JSON.stringify(state.items));
          localStorage.setItem("basketCounts", JSON.stringify(state.counts));
        }
      })
      .addCase(fetchBasket.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addToBasket.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.counts.push(action.payload.count || 1)
        localStorage.setItem("activeProducts", JSON.stringify(state.items));
        localStorage.setItem("basketCounts", JSON.stringify(state.counts));
      })
      .addCase(deleteFromBasket.fulfilled, (state, action) => {
        const id = action.payload;
        const index = state.items.findIndex((i) => i.id === id);
        if (index !== -1) {
          state.items.splice(index, 1);
          state.counts.splice(index, 1);
          localStorage.setItem("activeProducts", JSON.stringify(state.items))
          localStorage.setItem("basketCounts", JSON.stringify(state.counts))
        }
      })
       .addCase(removeProductEverywhere.fulfilled, (state, action) => {
        const id = action.payload;
      
        const index = state.items.findIndex((i) => i.id === id);
        if (index !== -1) {
          state.items.splice(index, 1);
          state.counts.splice(index, 1);
      
          localStorage.setItem("activeProducts", JSON.stringify(state.items));
          localStorage.setItem("basketCounts", JSON.stringify(state.counts));
        }
      })
  }

})
export const { addItemCount, subtractItemCount, applyPromo , clearBasket , syncBasket , loadFromStorage } = basketListSlice.actions
export default basketListSlice.reducer