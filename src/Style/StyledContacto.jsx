import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

const StyledContainer = styled(Container)({
	boxSizing: "border-box",
	marginTop: "1.5rem",
	textAlign: "center",

	"@media screen and (min-width:768px)": {
		display: "flex",
	},
});

const Img = styled("img")({
	display: "none",

	"@media screen and (min-width:768px)": {
		display: "block",
		width: "40%",
		objectFit: "cover",
		borderRadius: "2rem",
	},
});

const Form = styled("form")({
	width: "100%",
	margin: "0",
	boxShadow: "none",

	"@media screen and (min-width:768px)": {
		width: "55%",
		margin: "0 1.2rem 0.2rem",
		boxSizing: "border-box",
		boxShadow: "0 0 4px rgba(255, 255, 255, 0.5)",
	},
});
const ContenedorInput = styled("div")({
	marginTop: "0.75rem",
	paddingBottom: "0.75rem",
	"@media screen and (min-width:768px)": {
		paddingLeft: "0.75rem",
		paddingRight: "0.75rem",
	},
});
const Input = styled(TextField)({
	backgroundColor: "#fff",
	width: "100%",
	marginBottom: "0.75rem",
});

export { StyledContainer, Img, Form, ContenedorInput, Input };
