import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

const StyledContainer = styled(Container)({
  display: "flex",
  boxSizing: "border-box",
  justifyContent: "space-between",
  marginTop: "3rem",
  minHeight: "30vh" /* Mínimo del 30% del alto de la pantalla */,
  height: "75vh",
  overflow: "auto",

   "@media screen and (max-width:768px)": {
    height: "60vh",
  },
  "@media screen and (max-width:480px)": {
    margin: 0
  },
});

const Img = styled("img")({
  width: "40%",
  objectFit: "cover",
  borderRadius: "2rem",

  "@media screen and (max-width:768px)": {
    width: "30%",
  },
    "@media screen and (max-width:480px)": {
    display: 'none',
  },
});

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "55%",
  margin: "0 1.2rem 0.2rem",
  boxSizing: "border-box",
  boxShadow: "0 0 4px rgba(255, 255, 255, 0.5)",

  "@media screen and (max-width:768px)": {
    width: "65%",
  },
  "@media screen and (max-width:480px)": {
    width: "100%",
    margin: "0",
    boxShadow: "none",
  },
});

const Input = styled(TextField)({
  backgroundColor: "#fff",
  width: "95%",
});

export { StyledContainer, Img, Form, Input };
