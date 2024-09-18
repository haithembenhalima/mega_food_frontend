import { createSlice } from '@reduxjs/toolkit';
import loginExtraReducers from './reducer';

const initialState = {
  loginData: null,
  loginLoading: false,
  loginError: null,
};

const loginSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: loginExtraReducers,
});

export default loginSlice.reducer;
