import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6907441cb1879c890ed94527.mockapi.io/api/BasketModal';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/cart');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (product, thunkAPI) => {
    try {
      const res = await axios.post('/cart', product);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  'cart/deleteFromCart',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/cart/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCartQuantity = createAsyncThunk(
  'cart/updateCartQuantity',
  async ({ id, quantity }, thunkAPI) => {
    try {
      const res = await axios.patch(`/cart/${id}`, { quantity });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isModalOpened: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    openModal: (state) => {
      state.isModalOpened = true;
    },
    closeModal: (state) => {
      state.isModalOpened = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })

      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        const index = state.items.findIndex((i) => i.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      });
  },
});

export const { openModal, closeModal } = cartSlice.actions;
export default cartSlice.reducer;