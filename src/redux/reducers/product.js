// src/store/categorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  productData: [],
  productLoading: false,
  productError: null,
};

// Create an async thunk for fetching products
const fetchProducts = createAsyncThunk('products/fetchproducts', async (page) => {
  const response = await fetch(`http://localhost:5000/api/v1/products?page=${page}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result = await response.json();
  return result.data;
});

// Create the slice
const productSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productLoading = true;
        state.productError = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productLoading = false;
        state.productData = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = action.productError.message;
      });
  },
});

// Export the async thunk action
export { fetchProducts };

// Export the reducer
export default productSlice.reducer;
