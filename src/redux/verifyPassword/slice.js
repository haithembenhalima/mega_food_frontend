import { createSlice } from '@reduxjs/toolkit';
import verifyExtraReducers from './reducer';

const initialState = {
  verifyData: null,
  verifyLoading: false,
  verifyError: null,
};

const verifySlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: verifyExtraReducers,
});

export default verifySlice.reducer;
