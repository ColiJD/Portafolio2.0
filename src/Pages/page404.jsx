import gordo from "../img/gordo.jpg";
import * as React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography'
import { Paper } from "@mui/material";

const Img = styled('img')({
  width: '25%',
  borderRadius: 100
})




const Page404 = () => {
  return (<Container sx={{display: 'grid', placeItems: 'center'}}>
    <Paper sx={{backgroundColor: 'black',display: 'grid', placeItems: 'center', width: '50%',height: 250,marginTop: '2rem'  }} elevation={3}>
      <Img src={gordo} alt='pando rojo'/>
      <Typography variant="h4" component='span' color="white">Error 404</Typography>
    </Paper>
    </Container>
  );
};

export default Page404;