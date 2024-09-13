import { createAsyncThunk } from '@reduxjs/toolkit';

// @desc fetch all the products
export const fetchProducts = createAsyncThunk('products/fetchproducts', async (page) => {
  const response = await fetch(`http://localhost:5000/api/v1/products?page=${page}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result = await response.json();
  return result.data;
});
