import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../../features/auth/model/slice";
import { questionListReducer } from "../../features/QuestionList/model/store";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    questionList: questionListReducer,
  },
});
