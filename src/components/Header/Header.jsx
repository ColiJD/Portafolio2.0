import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import { StyledButon } from "../Componentes";

const Styledbarra = styled(Toolbar)`
  background-image: linear-gradient(225deg, rgba(0, 0, 0, 1) 75%, rgba(48, 42, 90, 1) 40%);
  border-bottom: solid 1px #fff;
  padding: 25px 4rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width:768px){
    flex-direction: column; 
    padding: 25px 0;
  }
`;

const StyledBox = styled(Box)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    justify-items: stretch;
    align-items: center;

    @media screen and (max-width:768px){
    
    margin-top: 30px;
  }

  @media screen and (max-width:480px){
    width: 100%;
    padding: 0 25px;
    grid-template-columns: 1fr;
    
  }

`;

const Header = () => {

  return (
    <AppBar position="sticky">
      <Styledbarra disableGutters>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src='https://firebasestorage.googleapis.com/v0/b/react-firebase-9385b.appspot.com/o/panda.jpg?alt=media&token=29baad28-b5ea-4b20-8c3f-996db1ea3256' alt="panda" />
          <Typography variant="h5" component="h1">
            Portafolio JD
          </Typography>
        </Box>
        <StyledBox>
          <Link to="/"><StyledButon >Sobre Mi</StyledButon></Link>
          <Link to="/proyectos"><StyledButon >Proyectos</StyledButon></Link>
          <Link to="/"> <StyledButon >CV</StyledButon></Link>
          <Link to="/"><StyledButon >CV</StyledButon></Link>
        </StyledBox>
      </Styledbarra>
    </AppBar>
  );
}

export default Header;