import { createAsyncThunk } from '@reduxjs/toolkit';

// @desc fetch all the Coupons
export const onlinePayment = createAsyncThunk('payment/onlinePayment', async (cartId) => {
    const response = await fetch(`http://localhost:5000/api/v1/payment/checkout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        'Content-Type': 'application/json', // Ensure this is set
      },
      body: JSON.stringify({ cartId }), // Wrap cartId in an object if required
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result.data;
  });