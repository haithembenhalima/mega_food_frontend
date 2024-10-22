import { createSlice } from '@reduxjs/toolkit';
import paymentExtraReducers from './reducer'
const initialState = {
  paymentData: [],
  paymentLoading: false,
  paymentError: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: paymentExtraReducers,
});

export default paymentSlice.reducer;
