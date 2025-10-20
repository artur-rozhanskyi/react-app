import { createBrowserRouter } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { QuestionListPage} from "./pages/QuestionListPage";
import { QuestionShowPage } from "./pages/QuestionShowPage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: LoginPage },
      {
        path: "questions",
        Component: QuestionListPage,
      },
      {
        path: "questions/:questionId",
        Component: QuestionShowPage,
      },
    ],
  },
]);
