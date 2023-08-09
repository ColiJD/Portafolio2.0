import React from "react";
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CardProyec from "../components/Proyectos/CardProtec/CardProyec";


const Proyectos = () => {
  return (
    <Container component='section' >
      <Typography variant="h2" component='h2' color="white" sx={{ textAlign: 'center', margin: '1.5rem' }}>Experiencia Laboral</Typography>
      <CardProyec
        imagen='https://colijd.github.io/Portafolio/assets/img/MENU.png'
        titulo='Tienda Online'
        descripcion='Proyecto para una cafeteria'
        repositorio='https://github.com/ColiJD/LunaCafe'
        demo='https://colijd.github.io/LunaCafe/'
      />
      <CardProyec />
    </Container>
  )
}

export default Proyectos;