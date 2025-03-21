import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const SContainer = styled(Container)({
	display: "flex",
	flexDirection: "row-reverse",
	justifyContent: "space-between",
	alignItems: "center",
	marginTop: "3rem",

	"@media screen and (max-width:480px)": {
		flexDirection: "column",
		marginTop: "2rem",
	},
});
const StyledImg = styled("img")({
	width: "25%",
	margin: "0 auto",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	borderRadius: "100%",
	marginLeft: "1.5rem",
	"@media screen and (max-width: 768px)": {
		width: "150px",
		height: "150px",
		margin: 0,
		textAlign: "center",
	},
	"@media screen and (max-width: 480px)": {
		width: "150px",
		height: "150px",
		margin: 0,
		textAlign: "center",
	},
});
const StyledBox = styled(Box)({
	width: "75%",
	"@media screen and (max-width:480px)": {
		width: "100%",
	},
});
const StyledParrafo = styled(Typography)({
	margin: "1.5rem 0 1.1rem",
	"@media screen and (max-width:480px)": {
		fontSize: "24px",
	},
});
const StyledToobar = styled(Toolbar)({
	"@media screen and (max-width:480px)": {
		flexWrap: "wrap",
		justifyContent: "space-around",
		margin: "0.5rem",
	},
});
const StyledButton = {
	"@media screen and (max-width:480px)": {
		margin: "0.5rem",
	},
};
const SBox = styled(Box)({
	display: "grid",
	justifyItems: "center",
	alignItems: "center",
	gridTemplateColumns: "auto auto ",
	"@media screen and (min-width: 400px)": {
		gridTemplateColumns: "auto auto auto",
	},
	"@media screen and (min-width: 768px)": {
		gridTemplateColumns: "auto auto auto auto",
		gridRowGap: "35px",
	},
	"@media screen and (min-width: 1024px)": {
		gridTemplateColumns: "auto auto auto auto auto auto",
	},
});
const STipografia = styled(Typography)({
	marginBottom: "1.5rem",
});
const SContainerSeccion = styled(Container)({
	marginBottom: "3rem",
	textAlign: "center",
});
const SBoxEdu = styled(Box)({
	display: "grid",
	justifyItems: "center",
	alignItems: "center",
	gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Se adapta automáticamente al tamaño de la pantalla
	gridGap: "35px", // Define el espacio entre los elementos
	"@media screen and (min-width: 400px)": {
	  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
	},
	"@media screen and (min-width: 768px)": {
	  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
	},
	"@media screen and (min-width: 1024px)": {
	  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
	},
  });
  

export {
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
};
