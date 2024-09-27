import { createAsyncThunk } from '@reduxjs/toolkit';

// @desc fetch all the Wishlists
export const fetchWishlist = createAsyncThunk('Wishlist/fetchWishlist', async (page) => {
  const response = await fetch(`http://localhost:5000/api/v1/wishlist/${localStorage.getItem('userId')}?page=${page}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    }
  });
    
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result = await response.json();
  console.log(result.data);
  
  return result.data;
 
  
});
