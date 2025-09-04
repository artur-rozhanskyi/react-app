import { Outlet } from "react-router";
import { Header } from "@/features/Header";
import "./App.css";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
