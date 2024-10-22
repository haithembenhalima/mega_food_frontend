import { createAsyncThunk } from '@reduxjs/toolkit';

// @desc fetch all the Coupons
export const fetchCoupon = createAsyncThunk('Coupon/fetchCoupon', async () => {
  
  const response = await fetch(`http://localhost:5000/api/v1/coupons/${localStorage.getItem('userId')}`, {
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


// @desc add coupon 
export const addCoupon = createAsyncThunk(
  'Coupon/addToCoupon',
  async (couponData, { rejectWithValue }) => {
    console.log(couponData);
    
    try {
      const response = await fetch('http://localhost:5000/api/v1/coupons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        },
        body: JSON.stringify(couponData),
      });

      if (!response.ok) {
        // Handle non-200 responses
        const error = await response.json();
        return rejectWithValue(error.message || 'Adding coupon to Coupon failed');
      }

      const result = await response.json();
      return result.data; // Return the user data and token
    } catch (error) {
      // Handle network or other errors
      return rejectWithValue(error.message || 'Network error');
    }
  }
);


// @desc add coupon to the Coupon
export const deleteCoupon = createAsyncThunk(
  'Coupon/deleteFCoupon',
  async (id, { rejectWithValue }) => {
    console.log(id);
    
    try {
      const response = await fetch(`http://localhost:5000/api/v1/coupon/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        },
        
      });

      if (!response.ok) {
        // Handle non-200 responses
        const error = await response.json();
        return rejectWithValue(error.message || 'Deleting coupon from Coupon failed');
      }

      const result = await response.json();
      return result.data; // Return the user data and token
    } catch (error) {
      // Handle network or other errors
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

// @desc apply the coupon
export const applyCoupon = createAsyncThunk(
    'Coupon/applyCoupon',
    async (couponData, { rejectWithValue }) => {
      console.log(couponData);
      
      try {
        const response = await fetch(`http://localhost:5000/api/v1/cart/applyCoupon`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
          },
          body: JSON.stringify(couponData),
        });
  
        if (!response.ok) {
          // Handle non-200 responses
          const error = await response.json();
          return rejectWithValue(error.message || 'applying coupon from failed');
        }
  
        const result = await response.json();
        return result.data; // Return the user data and token
      } catch (error) {
        // Handle network or other errors
        return rejectWithValue(error.message || 'Network error');
      }
    }
  );