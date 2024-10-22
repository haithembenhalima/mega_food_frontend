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
  
  return result.data;
 
  
});


// @desc add product to the Wishlist
export const addToWishlist = createAsyncThunk(
  'wishlis/addToWishlist',
  async (ProductData, { rejectWithValue }) => {
    console.log(ProductData);
    
    try {
      const response = await fetch('http://localhost:5000/api/v1/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        },
        body: JSON.stringify(ProductData),
      });

      if (!response.ok) {
        // Handle non-200 responses
        const error = await response.json();
        return rejectWithValue(error.message || 'Adding product to wishlist failed');
      }

      const result = await response.json();
      return result.data; // Return the user data and token
    } catch (error) {
      // Handle network or other errors
      return rejectWithValue(error.message || 'Network error');
    }
  }
);


// @desc delete product to the Wishlist
export const deleteFromWishlist = createAsyncThunk(
  'wishlis/deleteFromWishlist',
  async (id, { rejectWithValue }) => {
    console.log(id);
    
    try {
      const response = await fetch(`http://localhost:5000/api/v1/wishlist/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        },
        
      });

      if (!response.ok) {
        // Handle non-200 responses
        const error = await response.json();
        return rejectWithValue(error.message || 'Deleting product from wishlist failed');
      }

      const result = await response.json();
      return result.data; // Return the user data and token
    } catch (error) {
      // Handle network or other errors
      return rejectWithValue(error.message || 'Network error');
    }
  }
);