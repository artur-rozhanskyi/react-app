import { createSlice } from "@reduxjs/toolkit";
import { questionById } from "./thunks";

const initialState = {
  question: null,
};

const questionShowSlice = createSlice({
  name: "questionShow",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(questionById.fulfilled, (state, action) => {
      state.question = action.payload;
    });
  },
});

export const { action: questionShowActions } = questionShowSlice;
export const { reducer: questionShowReducer } = questionShowSlice;

