import { createBrowserRouter } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { QuetionListPage } from "./pages/QuestionListPage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: LoginPage },
      {
        path: "/questions",
        Component: QuetionListPage,
      },
    ],
  },
]);
