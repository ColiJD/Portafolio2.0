import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardProyec from "../components/Proyectos/CardProtec/CardProyec";
import pkerenabi from "../img/KerenabiFolio.webp";
import MultiMediaDown from "../img/multimediadow.webp";
import MediaDownloader from "../img/mediadownloadercd.webp";
import DrogeriaV3 from "../img/drogeria.webp";
import Carwash from "../img/carwash.webp";
import Reporte from "../img/Reporte.webp";
import Riego from "../img/riego.webp";
import Tickets from "../img/tickes.png";
import hospital from "../img/hospital.png";


const Proyectos = () => {
  return (
    <Container component='section' >
      <Typography variant="h3" component='h2' color="white" sx={{ textAlign: 'center', margin:'0.75rem 0' }}>Experiencia Laboral</Typography>
      <CardProyec
        imagen='https://colijd.github.io/Portafolio/assets/img/MENU.png'
        titulo='Tienda Online'
        descripcion='Proyecto para una cafeteria'
        repositorio='https://github.com/ColiJD/LunaCafe'
        demo='https://colijd.github.io/LunaCafe/'
      />
      <CardProyec
        imagen='https://colijd.github.io/Portafolio/assets/img/encriptar.png'
        titulo='Encriptado'
        descripcion='Challenge Oracle'
        repositorio='https://github.com/ColiJD/Programa-Encriptacion-'
        demo='https://colijd.github.io/Programa-Encriptacion-/'
      />
      {/*  */}
      <CardProyec
        imagen={MultiMediaDown}
        titulo='MultiMediaDown'
        descripcion='Este programa permite extraer audio de YouTube usando excel'
        repositorio='https://github.com/ColiJD/MultiMediaDown'
        demo=''
      />

      <CardProyec
        imagen={pkerenabi}
        titulo='KerenabiFolio'
        descripcion='Portafolio académico para maestra de escula'
        repositorio='https://github.com/ColiJD/KerenabiFolio'
        demo='https://colijd.github.io/KerenabiFolio/'
      />
      <CardProyec
        imagen={DrogeriaV3}
        titulo='DrogeriaV3'
        descripcion='CRUD para la venta de medicinas'
        repositorio='https://github.com/ColiJD/DrogeriaV3'
        demo=''
      />
      <CardProyec
        imagen={Carwash}
        titulo='Tres Valles Carwash'
        descripcion='Plataforma de reservación de lavado de vehículos para la compañía '
        repositorio='https://github.com/ColiJD/mcv202401'
        demo=''
      />
      <CardProyec
        imagen={Reporte}
        titulo='Reporte SAP'
        descripcion='Restructura archivos html a formato de tablas de excel'
        repositorio='https://github.com/ColiJD/Reporteria.3V'
        demo='https://reporteria3v.streamlit.app/'
      />
      <CardProyec
        imagen={Tickets}
        titulo='Tickets TI'
        descripcion='Análisis en power bi del manejo de los ticket por el departamento '
        repositorio=''
        demo=''
      />
      <CardProyec
        imagen={Riego}
        titulo='Reportes de Riego'
        descripcion='Reportes que muestran la humedad del suelo '
        repositorio=''
        demo=''
      />
      <CardProyec
        imagen={hospital}
        titulo='Reportes de Hospital'
        descripcion='Reportes que muestran la ocupación y recursos del hospital'
        repositorio=''
        demo=''
      />
    </Container>
  )
}

export default Proyectos;