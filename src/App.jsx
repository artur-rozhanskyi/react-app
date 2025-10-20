import { Outlet } from "react-router";
import { Header } from "@/features/Header";
import Container from "@mui/material/Container";
import "./App.css";

export function App() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
