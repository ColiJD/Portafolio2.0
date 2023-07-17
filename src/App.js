import React from "react";
import GlobalStyle from "./components/GlobalStyle"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import Proyectos from "./Pages/Proyectos";
import CV from './Pages/CV';
import Contacto from './Pages/Contacto'
import Container from "@mui/material/Container"
import Footer from "./components/Footer/Footer";


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
            <Route path="/CV" element={<CV />} />
            <Route path="/Contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </Router>
      </Container>
    </>

  )
}

export default App;
