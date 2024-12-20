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
					Hola, soy José Daniel Colindres, un apasionado creador de páginas web que transforma ideas en experiencias digitales memorables.
					</StyledParrafo>
					<Typography variant="body1">
						Con una sólida formación en Ciencias de la Computación en la Universidad Católica de Honduras, me especialicé en el desarrollo Front-end gracias al programa Oracle ONE en Alura Latam, donde convertí mi pasión por la tecnología en un motor de innovación.
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
					Soy un joven entusiasta que vive para crear, aprender y marcar la diferencia. La tecnología es mi medio para diseñar soluciones que faciliten la vida de las personas, ya sea a través de aplicaciones web, móviles o de escritorio.
					Me considero autodidacta, responsable y curioso, siempre buscando cómo llevar las ideas un paso más allá. Durante mi formación, tuve el privilegio de realizar mi práctica profesional en la Compañía Azucarera Tres Valles, dentro del Departamento de Tecnología de la Información, donde adquirí experiencia práctica en la implementación de soluciones tecnológicas.
					</Typography>
					<Typography variant="body1" sx={{ marginTop: "1.75rem" }}>
					He desarrollado habilidades en bases de datos (cursos en Udemy), desarrollo web con HTML, CSS, JavaScript, Git y React (Alura) y poseo conocimientos en redes informáticas gracias a la capacitación de Cisco.
					Mi misión es clara: crear, innovar y contribuir al futuro tecnológico con creatividad y determinación.
					</Typography>
				</StyledBox>
			</Container>
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
			<SContainerSeccion component="section">
				<STipografia variant="h2">Experiencia</STipografia>
				<SBoxEdu>
					<CardEducacion
						image="https://productoresdeazucarhonduras.com/wp-content/uploads/elementor/thumbs/2-1-ptr6xjo4tghogauxsqkxxwrk395sc23efl66d3570w.png"
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
		</>
	);
};

export default Home;
