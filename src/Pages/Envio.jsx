/** @format */

import sol from "../img/sol.webp";
import * as React from "react";
import Container from "@mui/material/Container";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";
import {tarjeta} from "../components/Variables";

export const Img = styled("img")({
	width: "25%",
	borderRadius: 100,

	"@media screen and (max-width:768px)": {
		width: "50%",
	},
});

export const StyledPaper = styled(Paper)({
	backgroundColor: tarjeta,
	display: "grid",
	placeItems: "center",
	width: "50%",
	height: 250,
	marginTop: "2rem",

	"@media screen and (max-width:480px)": {
		width: "100%",
	},
});

const Envio = () => {
	return (
		<Container sx={{display: "grid", placeItems: "center"}} component="section">
			<StyledPaper elevation={3}>
				<Img src={sol} alt="pando rojo" />
				<Typography
					variant="h4"
					component="span"
					sx={{fontWeight: "bold"}}
					color="white">
					Formulario Enviado
				</Typography>
			</StyledPaper>
		</Container>
	);
};

export default Envio;
