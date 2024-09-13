import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async (page) => {
  const response = await fetch(`http://localhost:5000/api/v1/categories?page=${page}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result = await response.json();
  return result.data;
});
