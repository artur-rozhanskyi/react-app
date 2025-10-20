import List from "@mui/material/List";
import { QuestionListItem } from "./QuestionListItem";

export const QuestionList = ({ questionList } = { questionList: [] }) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {questionList?.map((question) => (
        <QuestionListItem key={question.title} question={question} />
      ))}
    </List>
  );
};
