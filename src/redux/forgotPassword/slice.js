import { createSlice } from '@reduxjs/toolkit';
import forgotExtraReducers from './reducer';

const initialState = {
  forgotData: null,
  forgotLoading: false,
  forgotError: null,
};

const forgotSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: forgotExtraReducers,
});

export default forgotSlice.reducer;
