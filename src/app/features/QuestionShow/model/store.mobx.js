import {questionShowApi} from "@/features/QuestionShow/api/QuestionShowApi.js";
import {runInAction} from "mobx";

export const createQuestionShowStore = () => ({
  question: null,
  loading: false,

  async fetchById(id) {
    this.loading = true;
    try {
      const fetchedQuestion = await questionShowApi.getById(id);
      runInAction(() => {
        this.question = fetchedQuestion;
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.loading = false;
    }
  },
});
