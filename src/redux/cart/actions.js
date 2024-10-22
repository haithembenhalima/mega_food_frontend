import { createAsyncThunk } from '@reduxjs/toolkit';

// @desc fetch all the Carts
export const fetchCart = createAsyncThunk('Cart/fetchCart', async () => {
  
  const response = await fetch(`http://localhost:5000/api/v1/cart/${localStorage.getItem('userId')}`, {
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


// @desc add product to the Cart
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (ProductData, { rejectWithValue }) => {
    console.log(ProductData);
    
    try {
      const response = await fetch('http://localhost:5000/api/v1/Cart', {
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
        return rejectWithValue(error.message || 'Adding product to Cart failed');
      }

      const result = await response.json();
      return result.data; // Return the user data and token
    } catch (error) {
      // Handle network or other errors
      return rejectWithValue(error.message || 'Network error');
    }
  }
);


// @desc add product to the Cart
export const deleteFromCart = createAsyncThunk(
  'cart/deleteFromCart',
  async (id, { rejectWithValue }) => {
    console.log(id);
    
    try {
      const response = await fetch(`http://localhost:5000/api/v1/Cart/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        },
        
      });

      if (!response.ok) {
        // Handle non-200 responses
        const error = await response.json();
        return rejectWithValue(error.message || 'Deleting product from Cart failed');
      }

      const result = await response.json();
      return result.data; // Return the user data and token
    } catch (error) {
      // Handle network or other errors
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

