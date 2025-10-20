import { createSlice } from "@reduxjs/toolkit";
import { loginByEmail } from "./thunks";

const initialState = {
  isLoading: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => (state.user = null),
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginByEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginByEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Login failed";
      });
  },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;

