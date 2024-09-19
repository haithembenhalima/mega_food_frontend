import { createSlice } from '@reduxjs/toolkit';
import resetExtraReducers from './reducer';

const initialState = {
  resetData: null,
  resetLoading: false,
  resetError: null,
};

const resetSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: resetExtraReducers,
});

export default resetSlice.reducer;
