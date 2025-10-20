import {runInAction} from "mobx";
import {questionListApi} from "../api/questionListApi";

export const createQuestionListStore = () => ({
  questionList: null,
  loading: false,

  async getAll() {
    this.loading = true;
    try {
      const res = await questionListApi.getAll();
      runInAction(() => {
        this.questionList = res;
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.loading = false;
    }
  },
});
