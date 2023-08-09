import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import { StyledButon } from "../Componentes";
import { styled } from "@mui/material/styles";


const StyledBarra = {
  backgroundImage: 'linear-gradient(225deg, rgba(0, 0, 0, 1) 75%, rgba(48, 42, 90, 1) 40%)',
  borderBottom: 'solid 1px #fff',
  padding: '25px 4rem',
  display: 'flex',
  justifyContent: 'space-between',

  '@media screen and (max-width: 768px)': {
    flexDirection: 'column',
    padding: '25px 0',
  },
};

const StyledBox = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '1fr',
  gridColumnGap: '20px',
  gridRowGap: '20px',
  justifyItems: 'stretch',
  alignItems: 'center',


  '@media screen and (max-width: 768px)': {
    marginTop: '30px',
  },

  '@media screen and (max-width: 480px)': {
    width: '100%',
    padding: '0 25px',
    gridTemplateColumns: '1fr',
  
  },
};

const SAppBar = styled(AppBar)({
  position: 'sticky',

  '@media screen and (max-width: 480px)': {
    position: 'relative'
  }
});
const Header = () => {

  return (
    <SAppBar >
      <Toolbar sx={StyledBarra} disableGutters>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src='https://firebasestorage.googleapis.com/v0/b/react-firebase-9385b.appspot.com/o/panda.jpg?alt=media&token=29baad28-b5ea-4b20-8c3f-996db1ea3256' alt="panda" />
          <Typography variant="h5" component="h1">
            Portafolio JD
          </Typography>
        </Box>
        <Box sx={StyledBox}>
          <Link to="/"><StyledButon >Sobre Mi</StyledButon></Link>
          <Link to="/proyectos"><StyledButon >Proyectos</StyledButon></Link>
          <Link to="/Contacto"><StyledButon >Contactos</StyledButon></Link>
        </Box>
      </Toolbar>
    </SAppBar>
  );
}

export default Header;