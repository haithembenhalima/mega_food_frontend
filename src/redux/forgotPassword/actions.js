import { createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk for the forgot action
export const forgotAction = createAsyncThunk(
  "authentication/forgot",
  async (forgotData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/auth/forgotPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(forgotData),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || "forgot failed");
      }

      const result = await response.json();
      return result.data; // Return user data and token
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);
