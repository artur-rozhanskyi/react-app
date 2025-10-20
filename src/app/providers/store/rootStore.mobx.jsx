import { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";
import { createAuthStore } from "@/features/auth";
import { createQuestionShowStore } from "@/features/QuestionShow";
import { createQuestionListStore } from "@/features/QuestionList";

const createRootStore = () => {
  const questionShow = createQuestionShowStore();
  const questionList = createQuestionListStore();
  const auth = createAuthStore();

  return { questionShow, questionList, auth };
};

const RootStoreContext = createContext(null);

export const RootStoreProvider = ({ children }) => {
  const store = useLocalObservable(createRootStore);

  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRootStore = () => {
  const store = useContext(RootStoreContext);
  if (!store)
    throw new Error("useRootStore must be used within RootStoreProvider");

  return store;
};
