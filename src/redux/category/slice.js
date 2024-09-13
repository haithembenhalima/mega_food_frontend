import { createSlice } from '@reduxjs/toolkit';
import categoryExtraReducers from './reducer';

const initialState = {
  categoryData: [],
  catgeoryLoading: false,
  categoryError: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: categoryExtraReducers,
});

export default categorySlice.reducer;
