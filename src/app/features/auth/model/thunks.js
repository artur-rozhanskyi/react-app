import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../api/index";

export const loginByEmail = createAsyncThunk(
  "auth/loginByEmail",
  async ({ email, password }, thunkAPI) => {
    try {
      const user = await authApi.login({ email, password });

      return user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
