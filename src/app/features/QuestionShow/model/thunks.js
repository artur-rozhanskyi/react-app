import { createAsyncThunk } from "@reduxjs/toolkit";
import { questionShowApi } from "../api/QuestionShowApi";

export const questionById = createAsyncThunk(
  "questions/getById",
  async (id) => {
    try {
      const fetchedQuestion = await questionShowApi.getById(id);
      return fetchedQuestion;
    } catch (e) {
      console.log(e);
    }
  }
);
