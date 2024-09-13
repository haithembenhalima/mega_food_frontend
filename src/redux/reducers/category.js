// src/store/categorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  categoryData: [],
  catgeoryLoading: false,
  categoryError: null,
};

// Create an async thunk for fetching categories
const fetchCategories = createAsyncThunk('categories/fetchCategories', async (page) => {
  const response = await fetch(`http://localhost:5000/api/v1/categories?page=${page}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result = await response.json();
  return result.data;
});

// Create the slice
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.catgeoryLoading = true;
        state.categoryError = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.catgeoryLoading = false;
        state.categoryData = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.catgeoryLoading = false;
        state.categoryError = action.categoryError.message;
      });
  },
});

// Export the async thunk action
export { fetchCategories };

// Export the reducer
export default categorySlice.reducer;
