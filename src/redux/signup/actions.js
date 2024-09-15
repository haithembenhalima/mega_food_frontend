import { createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk for the signup action
export const signupAction = createAsyncThunk(
  'authentication/signup',
  async (signupData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (!response.ok) {
        // Handle non-200 responses
        const error = await response.json();
        return rejectWithValue(error.message || 'Signup failed');
      }

      const result = await response.json();
      return result.data; // Return the user data and token
    } catch (error) {
      // Handle network or other errors
      return rejectWithValue(error.message || 'Network error');
    }
  }
);
