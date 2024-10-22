import { createSlice } from '@reduxjs/toolkit';
import couponExtraReducers from './reducer'
const initialState = {
  couponData: [],
  couponLoading: false,
  couponError: null,
};

const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {},
  extraReducers: couponExtraReducers,
});

export default couponSlice.reducer;
