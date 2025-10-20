import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useDispatch, useSelector } from "react-redux";
import { getAll, questionListSelectors, QuestionList } from "@/features/QuestionList";
import { useRootStore } from "../providers/store/rootStore.mobx.jsx";

export const QuestionListPage = observer(() => {
  const questionList = useSelector(questionListSelectors.selectQuestionList);
  const dispatch = useDispatch();

  const { questionList: questionListStore } = useRootStore();

  const fromStore = 'redux';

  const questionListToShow = fromStore === 'redux' ? questionList : questionListStore.questionList;

  useEffect(() => {
    void dispatch(getAll());
    questionListStore.getAll();
  }, [dispatch, questionListStore]);

  return <QuestionList questionList={questionListToShow} />;
});
