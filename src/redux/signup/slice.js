import { createSlice } from '@reduxjs/toolkit';
import signupExtraReducers from './reducer';

const initialState = {
  signupData: [],
  signupLoading: false,
  signupError: null,
};

const signupSlice = createSlice({
  name: 'signupentication',
  initialState,
  reducers: {},
  extraReducers: signupExtraReducers,
});

export default signupSlice.reducer;