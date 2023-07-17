import React from "react";
import GlobalStyle from "./components/GlobalStyle"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import Proyectos from "./Pages/Proyectos";
import Container from "@mui/material/Container"


const App = () => {
  return (
  <>
    <GlobalStyle />
    <Container>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </Router>
    </Container>
  </>

  )
}

export default App;
