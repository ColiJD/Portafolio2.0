import React from "react";
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar'
import { MuiButton } from "../components/Componentes";
import MuiCard from "../components/Home/Card/Card";
import CardEducacion from "../components/Home/CardEdu/CardEdu";


const SContainer = styled(Container)({
  display: "flex", flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', marginTop: "3rem",

  '@media screen and (max-width:480px)': {
    flexDirection: 'column',
    marginTop: '2rem'
  }
})
const StyledImg = styled('img')({
  width: '25%',
  margin: '0 auto',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: '100%',
  marginLeft: '1.5rem',
  '@media screen and (max-width: 768px)': {
    width: '150px',
    height: '150px',
    margin: 0,
    textAlign: 'center'
  },
  '@media screen and (max-width: 480px)': {
    width: '150px',
    height: '150px',
    margin: 0,
    textAlign: 'center'
  }
})
const StyledBox = styled(Box)({
  width: '75%',
  '@media screen and (max-width:480px)': {
    width: '100%'
  }
});
const StyledParrafo = styled(Typography)({
  margin: '1.5rem 0 1.1rem',
  '@media screen and (max-width:480px)': {
    fontSize: '24px',
  }
})
const StyledToobar = styled(Toolbar)({
  '@media screen and (max-width:480px)': {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '0.5rem'
  }
})
const StyledButton = {
  '@media screen and (max-width:480px)': {
    margin: '0.5rem'
  }
}
const SBox = styled(Box)({
  display: 'flex', justifyContent: 'space-around',
  flexWrap: 'wrap',
  '@media screen and (max-width:480px)': {
    display: 'flex',
    flexWrap: 'wrap',
  }
})
const STipografia = styled(Typography)({
  marginBottom: '1.5rem'
});
const SContainerSeccion = styled(Container)({
  marginBottom: '3rem', textAlign: 'center',
});
const SBoxEdu = {
  '@media screen and (max-width: 480px)': {
    display: 'flex',
    flexDirection: 'column' // Cambia el border-radius para mantener la forma circular
  }
}

const Home = () => {
  return (
    <>
      <SContainer>
        <StyledImg src="https://colijd.github.io/Portafolio/assets/img/perfil.jpg" />
        <StyledBox>
          <StyledParrafo variant="h4" component="p">Hola, mi nombre es Jose Daniel Colindres y construyo paginas web</StyledParrafo>
          <Typography variant="body1" >Soy formado en la univercidad catolica de Honduras en la carrera de ciencias
            de la computacion especializado en Front-end gracias al equipo de alura,estuve participando del proyecto Oracle ONE en Alura Latam.
          </Typography>
          <StyledToobar>
            <MuiButton sx={StyledButton} variant="outlined" href="https://github.com/ColiJD?tab=repositories" >Github</MuiButton>
            <MuiButton sx={StyledButton} variant="outlined" href="https://www.linkedin.com/in/jose-colindres-55850b258">Linkedin</MuiButton>
            <MuiButton sx={StyledButton} variant="outlined" href="https://www.instagram.com/jose_colindres89/">Instagram</MuiButton>
            <MuiButton sx={StyledButton} variant="outlined" href="https://colijd.github.io/imagenes/imagen/cv.pdf">Curriculum</MuiButton>
          </StyledToobar>
        </StyledBox>
      </SContainer>
      <Container sx={{ marginBottom: '2rem' }}>
        <StyledBox >
          <STipografia variant="h2">Sobre Mi</STipografia>
          <Typography variant="body1" sx={{ textAlign: "justify" }} >Soy un joven de 22 años de tes blanca me gusta la tecnología, la creacion de aplicaciones de escritorio, de dispositivos mobiles, el desarrollo de paginas web, soy atento, autodidacta, responsable, estudie la carrera de ciencias de la computacion por que me gusta el hecho de crear, de innovar nuevas sistemas que ayuden a las personas a desarrollar sus actividades con mayor facilidad, soy entuciasta,</Typography>
          <Typography variant="body1" sx={{ marginTop: "1.75rem" }}>Citando a una gran persona que dijo "Si puedes imaginarlo puedes programarlo" Estoy capacitado por cursos en udemy de base de datos, y en alura de html, css, javascript, git y react y poseo conocimiento en el area de redes por la capacitacion de cisco.</Typography>
        </StyledBox>
      </Container>
      <SContainerSeccion >
        <STipografia variant="h2" >Habilidades</STipografia>
        <SBox >
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/htlm.png' alt='Html' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/css_icon.png' alt='Css' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/js_icon.png' alt='JavaScript' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/react_icon.png' alt='React' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/sql.png' alt='MySql' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/nodejs_icon.png' alt='Node JS' />
        </SBox>
      </SContainerSeccion>
      <SContainerSeccion >
        <STipografia variant="h2" >Hobbies</STipografia>
        <SBox >
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/tv_icon.png' alt='Anime' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/tv_icon.png' alt='Series' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/guitar_icon.png' alt='Guitarra' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/headphones_icon.png' alt='Musica' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/volley.png' alt='Volleyball' />
          <MuiCard image='https://colijd.github.io/Portafolio/assets/img/moto.png' alt='Ir de Ruta' />
        </SBox>
      </SContainerSeccion>
      <SContainerSeccion >
        <STipografia variant="h2" >Educacion</STipografia>
        <SBox sx={SBoxEdu}>
          <CardEducacion image='https://colijd.github.io/Portafolio/assets/img/unicah.png' alt='Logo de la universidad catolica'
            subtitulo='Ing Ciencias de la Computacion' anio='2020-2024' />
          <CardEducacion image='https://colijd.github.io/Portafolio/assets/img/alura_logo.png' alt='Logo de alura'
            subtitulo='Diseño Web' anio='Alura-2023' />
          <CardEducacion image='https://colijd.github.io/Portafolio/assets/img/udemy.png' alt='Logo de udemy'
            subtitulo='Base de Datos' anio='Curso 2022' />
        </SBox>
      </SContainerSeccion>
    </>
  )
}

export default Home;