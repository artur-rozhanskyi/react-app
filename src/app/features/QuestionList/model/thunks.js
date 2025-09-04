import { createAsyncThunk } from "@reduxjs/toolkit";
import { questionListApi } from "../api/questionListApi";

export const getAll = createAsyncThunk("questionList/getAll", async () => {
  try {
    const fetchedQuestionList = await questionListApi.getAll();

    return fetchedQuestionList;
  } catch (e) {
    console.log(e);
  }
});
