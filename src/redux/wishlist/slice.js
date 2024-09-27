import { createSlice } from '@reduxjs/toolkit';
import wishlistExtraReducers from './reducer';

const initialState = {
  wishlistData: [],
  wishlistLoading: false,
  wishlistError: null,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
  extraReducers: wishlistExtraReducers,
});

export default wishlistSlice.reducer;
