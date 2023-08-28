import gordo from "../img/gordo.webp";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography'
import { StyledPaper, Img } from "./Envio";


const Page404 = () => {
  return (<Container sx={{display: 'grid', placeItems: 'center'}} component='section'>
    <StyledPaper elevation={3}>
      <Img src={gordo} alt='pando rojo'/>
      <Typography variant="h4" component='span' color="red" sx={{fontWeight: 'bold'}}>404 Error</Typography>
    </StyledPaper>
    </Container>
  );
};

export default Page404;