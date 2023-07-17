import React from "react";
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import styled from "styled-components";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar'
import { MuiButton } from "../components/Componentes";
import MuiCard from "../components/Card/Card";

const StyledImg = styled.img`
    display: block;
    height: 300px;
    width: 300px;
    margin: 0 auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    margin-left: 1.5rem;

`
const StyledBox = styled(Box)`
  width: 75%;
`

const StyledContainer = styled(Container)`
  margin-bottom: 3rem;
  text-align: center;
`

const Home = () => {
  return (
    <>
      <Container sx={{ display: "flex", flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', marginTop: "3rem" }}>
        <StyledImg src="https://colijd.github.io/Portafolio/assets/img/perfil.jpg" />
        <StyledBox>
          <Typography variant="h4" component="p" sx={{ marginBottom: "2rem" }}>Hola, mi nombre es Jose Daniel Colindres y construyo paginas web</Typography>
          <Typography variant="body1" >Soy formado en la univercidad catolica de Honduras en la carrera de ciencias
            de la computacion especializado en Front-end gracias al equipo de alura,estuve participando del proyecto Oracle ONE en Alura Latam.
          </Typography>
          <Toolbar>
            <MuiButton href="https://github.com/ColiJD?tab=repositories" >Github</MuiButton>
            <MuiButton href="https://www.linkedin.com/in/jose-colindres-55850b258">Linkedin</MuiButton>
            <MuiButton href="https://www.instagram.com/jose_colindres89/">Instagram</MuiButton>
          </Toolbar>
        </StyledBox>
      </Container>
      <Container sx={{ marginBottom: '2rem' }}>
        <StyledBox>
          <Typography variant="h2">Sobre Mi</Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }} >Soy un joven de 22 años de tes blanca me gusta la tecnología, la creacion de aplicaciones de escritorio, de dispositivos mobiles, el desarrollo de paginas web, soy atento, autodidacta, responsable, estudie la carrera de ciencias de la computacion por que me gusta el hecho de crear, de innovar nuevas sistemas que ayuden a las personas a desarrollar sus actividades con mayor facilidad, soy entuciasta,</Typography>
          <Typography variant="body1" sx={{ marginTop: "1.75rem" }}>Citando a una gran persona que dijo "Si puedes imaginarlo puedes programarlo" Estoy capacitado por cursos en udemy de base de datos, y en alura de html, css, javascript, git y react y poseo conocimiento en el area de redes por la capacitacion de cisco.</Typography>
        </StyledBox>
      </Container>
      <StyledContainer>
        <Typography variant="h2" sx={{ marginBottom: '1.5rem' }}>Habilidades</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/htlm.png' alt='Html' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/css_icon.png' alt='Css' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/js_icon.png' alt='JavaScript' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/react_icon.png' alt='React' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/sql.png' alt='MySql' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/nodejs_icon.png' alt='Node JS' />
        </Box>
      </StyledContainer>
      <StyledContainer>
        <Typography variant="h2" sx={{ marginBottom: '1.5rem' }}>Hobbies</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/tv_icon.png' alt='Anime' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/tv_icon.png' alt='Series' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/guitar_icon.png' alt='Guitarra' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/headphones_icon.png' alt='Musica' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/volley.png' alt='Volleyball' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/moto.png' alt='Ir de Ruta' />
        </Box>
      </StyledContainer>
    </>
  )
}

export default Home;