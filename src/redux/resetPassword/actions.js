import { createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk for the reset action
export const resetAction = createAsyncThunk(
  "authentication/reset",
  async (resetData, { rejectWithValue }) => {
    try {      
      const response = await fetch(
        "http://localhost:5000/api/v1/auth/resetPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resetData),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || "reset failed");
      }

      const result = await response.json();
      return result.data; // Return user data and token
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);
