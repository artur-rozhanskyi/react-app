import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Provider } from 'react-redux'
import { RootStoreProvider } from "@/providers/store/rootStore.mobx";
import { store } from '@/providers/store'
import { router } from "./app/router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RootStoreProvider>
        <RouterProvider router={router} />
      </RootStoreProvider>
    </Provider>
  </StrictMode>
);
