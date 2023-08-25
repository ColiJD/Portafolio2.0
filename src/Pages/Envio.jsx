import sol from "../img/sol.jpg";
import * as React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography'
import { Paper } from "@mui/material";

const Img = styled('img')({
  width: '25%',
  borderRadius: 100
})




const Envio = () => {
  return (<Container sx={{display: 'grid', placeItems: 'center'}} component='section'>
    <Paper sx={{backgroundColor: 'black',display: 'grid', placeItems: 'center', width: '50%',height: 250,marginTop: '2rem'  }} elevation={3}>
      <Img src={sol} alt='pando rojo'/>
      <Typography variant="h4" component='span' color="white">Formulario Enviado </Typography>
    </Paper>
    </Container>
  );
};

export default Envio;
