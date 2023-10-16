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
import sql1 from "../img/sql.webp";
import musica from "../img/audifonos-inalambricos.webp";
import anime from "../img/anime.webp";
import piton from "../img/piton.png";

const Home = () => {
	return (
		<>
			<SContainer component="section">
				<StyledImg src="https://colijd.github.io/Portafolio/assets/img/perfil.jpg" />
				<StyledBox>
					<StyledParrafo variant="h4" component="p">
						Hola, mi nombre es Jose Daniel Colindres y construyo paginas web
					</StyledParrafo>
					<Typography variant="body1">
						Soy formado en la univercidad catolica de Honduras en la carrera
						de ciencias de la computacion especializado en Front-end gracias
						al equipo de alura,estuve participando del proyecto Oracle ONE en
						Alura Latam.
					</Typography>
					<StyledToobar>
						<MuiButton
							sx={StyledButton}
							variant="outlined"
							href="https://github.com/ColiJD?tab=repositories">
							Github
						</MuiButton>
						<MuiButton
							sx={StyledButton}
							variant="outlined"
							href="https://www.linkedin.com/in/jose-colindres-55850b258">
							Linkedin
						</MuiButton>
						<MuiButton
							sx={StyledButton}
							variant="outlined"
							href="https://www.instagram.com/jose_colindres89/">
							Instagram
						</MuiButton>
						<MuiButton
							sx={StyledButton}
							variant="outlined"
							href="https://colijd.github.io/imagenes/imagen/CV%20de%20Jose%20Colindres.pdf">
							Curriculum
						</MuiButton>
					</StyledToobar>
				</StyledBox>
			</SContainer>
			<Container sx={{ marginBottom: "2rem" }} component="section">
				<StyledBox>
					<STipografia variant="h2">Sobre Mi</STipografia>
					<Typography variant="body1" sx={{ textAlign: "justify" }}>
						Soy un joven de 22 años de tes blanca me gusta la tecnología, la
						creacion de aplicaciones de escritorio, de dispositivos mobiles,
						el desarrollo de paginas web, soy atento, autodidacta,
						responsable, estudie la carrera de ciencias de la computacion por
						que me gusta el hecho de crear, de innovar nuevas sistemas que
						ayuden a las personas a desarrollar sus actividades con mayor
						facilidad, soy entuciasta,
					</Typography>
					<Typography variant="body1" sx={{ marginTop: "1.75rem" }}>
						Citando a una gran persona que dijo "Si puedes imaginarlo puedes
						programarlo" Estoy capacitado por cursos en udemy de base de
						datos, y en alura de html, css, javascript, git y react y poseo
						conocimiento en el area de redes por la capacitacion de cisco.
					</Typography>
				</StyledBox>
			</Container>
			<SContainerSeccion component="section">
				<STipografia variant="h2">Habilidades</STipografia>
				<SBox>
					<MuiCard
						image="https://colijd.github.io/Portafolio/assets/img/htlm.png"
						alt="Html"
					/>
					<MuiCard
						image="https://colijd.github.io/Portafolio/assets/img/css_icon.png"
						alt="Css"
					/>
					<MuiCard
						image="https://colijd.github.io/Portafolio/assets/img/js_icon.png"
						alt="JavaScript"
					/>
					<MuiCard
						image="https://colijd.github.io/Portafolio/assets/img/react_icon.png"
						alt="React"
					/>
					<MuiCard image={sql1} alt="MySql" />
					<MuiCard
						image="https://colijd.github.io/Portafolio/assets/img/nodejs_icon.png"
						alt="Node JS"
					/>
					<MuiCard image={piton} alt="Python" />
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
			<SContainerSeccion component="section">
				<STipografia variant="h2">Educacion</STipografia>
				<SBoxEdu>
					<CardEducacion
						image="https://colijd.github.io/Portafolio/assets/img/unicah.png"
						alt="Logo de la universidad catolica"
						subtitulo="Ing Ciencias de la Computacion"
						anio="2020-2024"
					/>
					<CardEducacion
						image="https://colijd.github.io/Portafolio/assets/img/alura_logo.png"
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
		</>
	);
};

export default Home;
