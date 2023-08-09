import React from "react";
import GlobalStyle from "./components/GlobalStyle"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import Proyectos from "./Pages/Proyectos";
import Contacto from './Pages/Contacto'
import Container from "@mui/material/Container"
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container component='main'>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/Contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </Router>
      </Container>
    </>
  )
}

export default App;
