import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { observer } from "mobx-react-lite";
import { useRootStore } from "@/providers/store/rootStore.mobx";
import { questionsShowSelectors, questionById, Question } from "@/features/QuestionShow";

export const QuestionShowPage = observer(() => {
  const params = useParams();
  const { questionShow } = useRootStore();
  const dispatch = useDispatch();
  const question = useSelector(questionsShowSelectors.selectedQuesion);

  const fromStore = 'redux';
  console.log(fromStore === 'redux');
  const questionToShow = fromStore === 'redux' ? question : questionShow.question;

  useEffect(() => {
    void questionShow.fetchById(params.questionId);
    dispatch(questionById(params.questionId));
  }, [params.questionId, questionShow, dispatch]);

  return <Question question={questionToShow} />;
});
