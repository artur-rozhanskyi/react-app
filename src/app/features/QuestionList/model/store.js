import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "./thunks";

const initialState = {
  questionList: [],
};

const questionListSlice = createSlice({
  name: "questionList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.questionList = action.payload;
    });
  },
});

export const { actions: questionListActions } = questionListSlice;
export const { reducer: questionListReducer } = questionListSlice;

