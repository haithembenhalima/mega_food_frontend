import { createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk for the login action
export const loginAction = createAsyncThunk(
  'authentication/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || 'Login failed');
      }

      const result = await response.json();
      return result.data; // Return user data and token
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);
