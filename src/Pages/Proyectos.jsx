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
      <CardProyec
        imagen= 'https://colijd.github.io/imagenes/imagen/principal.webp'
        titulo='ColiFlix'
        descripcion='Proyecto de alura para subir y ver videos como una app de streaming'
        repositorio='https://github.com/ColiJD/ColiFlix'
        demo='https://coli-flix.vercel.app/'
      />
      <CardProyec
        imagen= 'https://colijd.github.io/imagenes/imagen/usuarios.webp'
        titulo='Organizacion'
        descripcion='Proyecto para registrar las areas y empleados de una empresa'
        repositorio='https://github.com/ColiJD/AluraGeekP'
        demo='https://alura-geek-p.vercel.app/'
      />
      <CardProyec
        imagen='https://colijd.github.io/imagenes/imagen/bank.webp'
        titulo='Smart Bank'
        descripcion='Proyecto para llevar la finanzas de forma ordenada'
        repositorio='https://github.com/ColiJD/StyledComponents'
        demo='https://styled-components-beryl.vercel.app/'
      />
      <CardProyec
        imagen='https://colijd.github.io/imagenes/imagen/food.webp'
        titulo='AluraFood'
        descripcion='Simple recorrido de un Formulario'
        repositorio='https://github.com/ColiJD/ReactHooks-Context'
        demo='https://react-hooks-context-three.vercel.app/'
      />
      <CardProyec
        imagen='https://colijd.github.io/Portafolio/assets/img/encriptar.png'
        titulo='Encriptador'
        descripcion='Challenge Oracle'
        repositorio='https://github.com/ColiJD/Programa-Encriptacion-'
        demo='https://colijd.github.io/Programa-Encriptacion-/'
      />
      <CardProyec
        imagen='https://colijd.github.io/Portafolio/assets/img/forca2_print.png'
        titulo='El ahorcado'
        descripcion='Challenge Oracle'
        repositorio='https://github.com/ColiJD?tab=repositories'
        demo='https://github.com/ColiJD?tab=repositories'
      />
    </Container>
  )
}

export default Proyectos;