import { createSlice } from '@reduxjs/toolkit';
import cartExtraReducers from './reducer'
const initialState = {
  cartData: [],
  cartLoading: false,
  cartError: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: cartExtraReducers,
});

export default cartSlice.reducer;
