import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import List from "@mui/material/List";
import { selectQuestionList } from "../model/selector";
import { getAll } from "../model/thunks";
import { QuestionListItem } from "./QuestionListItem";

export const QuestionList = () => {
  const dispatch = useDispatch();
  const questionList = useSelector(selectQuestionList);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <List sx={{ width: "100%", maxWidth: 420, bgcolor: "background.paper" }}>
      {questionList.map((question) => (
        <QuestionListItem key={question.title} question={question} />
      ))}
    </List>
  );
};
