import { createSlice } from '@reduxjs/toolkit';
import productExtraReducers from './reducer';

const initialState = {
  productData: [],
  productLoading: false,
  productError: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: productExtraReducers,
});

export default productSlice.reducer;
