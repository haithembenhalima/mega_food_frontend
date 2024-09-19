import { createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk for the verify action
export const verifyAction = createAsyncThunk(
  "authentication/verify",
  async (resetCode, { rejectWithValue }) => {
    try {      
      const response = await fetch(
        "http://localhost:5000/api/v1/auth/verifyResetCode",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resetCode),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || "verify failed");
      }

      const result = await response.json();
      return result.data; // Return user data and token
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);
