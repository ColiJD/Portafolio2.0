import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { MuiButton } from "../components/Componentes";
import MuiCard from "../components/Home/Card/Card";
import CardEducacion from "../components/Home/CardEdu/CardEdu";
import {
  SContainer,
  StyledImg,
  StyledBox,
  StyledParrafo,
  StyledToobar,
  StyledButton,
  SBox,
  STipografia,
  SContainerSeccion,
  SBoxEdu,
} from "../Style/StyledHome";

import musica from "../img/audifonos-inalambricos.webp";
import anime from "../img/anime.webp";

import unicah from "../img/unicah.jpeg";
import alura from "../img/alura.png";
import TValles from "../img/3TV.jpg";
import perfil from "../img/perfil.jpg";

const Home = () => {
  return (
    <>
      <SContainer component="section">
        <StyledImg src={perfil} />
        <StyledBox>
          <StyledParrafo variant="h4" component="p">
            Hola, soy José Daniel Colindres, Ingeniero en Ciencia de la
            Computación..
          </StyledParrafo>
          <Typography variant="body1">
            Tengo experiencia en desarrollo de software, análisis de datos y
            creación de soluciones digitales. Mi formación en la Universidad
            Católica de Honduras, junto con mi participación en el programa
            Oracle ONE en Alura Latam, me ha permitido trabajar en diversos
            proyectos tecnológicos. Me apasiona convertir ideas en soluciones
            funcionales, combinando creatividad y eficiencia para generar
            impacto en el mundo digital..
          </Typography>
          <StyledToobar>
            <MuiButton
              sx={StyledButton}
              variant="outlined"
              href="https://github.com/ColiJD?tab=repositories"
            >
              Github
            </MuiButton>
            <MuiButton
              sx={StyledButton}
              variant="outlined"
              href="https://www.linkedin.com/in/jose-colindres-55850b258"
            >
              Linkedin
            </MuiButton>
            <MuiButton
              sx={StyledButton}
              variant="outlined"
              href="https://www.instagram.com/jose_colindres89/"
            >
              Instagram
            </MuiButton>
            {/* <MuiButton
              sx={StyledButton}
              variant="outlined"
              href="https://colijd.github.io/imagenes/imagen/CV%20de%20Jose%20Colindres.pdf"
            >
              Curriculum
            </MuiButton> */}
          </StyledToobar>
        </StyledBox>
      </SContainer>
      <Container sx={{ marginBottom: "2rem" }} component="section">
        <StyledBox>
          <STipografia variant="h2">Sobre Mi</STipografia>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            Soy un profesional apasionado por la tecnología, con experiencia en
            el desarrollo de aplicaciones y soluciones tecnológicas que mejoran
            la vida de las personas. Me considero autodidacta, responsable y
            curioso, siempre buscando nuevas formas de innovar. Trabajé como
            Analista de Datos en la Compañía Azucarera Tres Valles, donde
            desarrollé reportes en Power BI, creé una aplicación web en PHP para
            la reservación de lavados de vehículos, y transformé datos de SAP
            mediante scripts en Python. Además, he trabajado en proyectos
            personales como una plataforma de e-commerce y un sistema de gestión
            para cafeterías.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "1.75rem" }}>
            Mi objetivo es seguir creando soluciones innovadoras que contribuyan
            al futuro tecnológico.
          </Typography>
        </StyledBox>
      </Container>
      <SContainerSeccion component="section">
        <STipografia variant="h2">Educacion</STipografia>
        <SBoxEdu>
          <CardEducacion
            image={unicah}
            alt="Logo de la universidad catolica"
            subtitulo="Ing Ciencias de la Computacion"
            anio="2020-2024"
          />
          <CardEducacion
            image={alura}
            alt="Logo de alura"
            subtitulo="Diseño Web"
            anio="Alura-2023"
          />
          <CardEducacion
            image="https://colijd.github.io/Portafolio/assets/img/udemy.png"
            alt="Logo de udemy"
            subtitulo="Base de Datos"
            anio="Curso 2022"
          />
        </SBoxEdu>
      </SContainerSeccion>
      <SContainerSeccion component="section">
        <STipografia variant="h2">Experiencia</STipografia>
        <SBoxEdu>
          <CardEducacion
            image={TValles}
            alt="Logo compañia tres valles"
            subtitulo="Compañía Azucarera Tres Valles "
            anio="2024-10-1"
          />
        </SBoxEdu>
      </SContainerSeccion>
      <SContainerSeccion component="section">
        <STipografia variant="h2">Habilidades</STipografia>
        <SBox>
          <MuiCard
            image="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="Html"
          />
          <MuiCard
            image="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
            alt="Css"
          />
          <MuiCard
            image="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            alt="JavaScript"
          />
          <MuiCard
            image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React"
          />
          <MuiCard
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/640px-MySQL_textlogo.svg.png"
            alt="MySQL"
          />
          <MuiCard
            image="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            alt="Node JS"
          />
          <MuiCard
            image="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
            alt="Python"
          />
          <MuiCard
            image="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
            alt="Power BI"
          />
          <MuiCard
            image="https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg"
            alt="C#"
          />
        </SBox>
      </SContainerSeccion>
      <SContainerSeccion component="section">
        <STipografia variant="h2">Hobbies</STipografia>
        <SBox>
          <MuiCard image={anime} alt="Anime" />
          <MuiCard
            image="https://colijd.github.io/Portafolio/assets/img/tv_icon.png"
            alt="Series"
          />
          <MuiCard
            image="https://colijd.github.io/Portafolio/assets/img/guitar_icon.png"
            alt="Guitarra"
          />
          <MuiCard image={musica} alt="Musica" />
          <MuiCard
            image="https://colijd.github.io/Portafolio/assets/img/volley.png"
            alt="Volleyball"
          />
          <MuiCard
            image="https://colijd.github.io/Portafolio/assets/img/moto.png"
            alt="Ir de Ruta"
          />
        </SBox>
      </SContainerSeccion>
    </>
  );
};

export default Home;
