import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@/features/auth";
import { questionListReducer } from "@/features/QuestionList";
import { questionShowReducer } from "@/features/QuestionShow";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    questionList: questionListReducer,
    questionShow: questionShowReducer,
  },
});
