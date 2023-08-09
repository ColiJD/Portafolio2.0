import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { MuiButton } from '../../Componentes';
import { azul, cenizaClaro, fuschia, blanco} from '../../Variables';


const StyledPaper = styled(Paper)({
  display: 'flex',
  maxHeight: '330px',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: 'auto',
  backgroundColor: cenizaClaro,
  marginBottom: '2rem',
  flexWrap: 'wrap',
  boxShadow: '4px 3px 6px rgba(255, 255, 255, 0.7)',

  '@media screen and (max-width:768px)': {
    flexDirection: 'column',
    maxHeight: '500px',
    
  }

})
const Img = styled('img')({
  width: '60%',
  maxHeight: '290px',
  margin: '1.2rem',
  marginRight: 0,
  boxShadow: '4px 3px 6px rgba(0, 0, 0, 0.7)',
  '@media screen and (max-width:768px)': {
    width: '100%',
    margin: 0,

  }
});
const StyledInfo = styled(Box)({
  width: '35%',
  textAlign: 'center',
  '@media screen and (min-width:768px) and (max-width:835px)': {
    justifyContent: 'center',

  },
  '@media screen and (max-width:768px)': {
    width: '100%',
    padding: '1.5rem 0',
    paddingLeft: '1.5rem',
    textAlign: 'left',
  }
})
const StyledTitulo = styled(Typography)({
  color: azul,
  '@media screen and (max-width:945px)': {
    fontSize: '38px',
  },
  '@media screen and (max-width:768px)': {
    fontSize: '32px',
  }

})
const BotonRepo = {
  color: azul,
  borderColor: azul,
  transition: 'all 0.5s ease-in',

  '&:hover': {
    color: blanco,
    backgroundColor: azul,

  },

  '@media screen and (min-width:768px) and (max-width:835px)': {
    marginBottom: '0.5rem',
  }
}
const BotonDemo = {
  backgroundColor: azul,
  transition: 'all 0.5s ease-in',
  '&:hover': {
    borderColor: azul,
    color: fuschia
  },
}


const CardProyec = ({ imagen, titulo, descripcion, repositorio, demo }) => {
  return (
    <StyledPaper>
      <Img src={imagen} alt={descripcion} />
      <StyledInfo>
        <StyledTitulo variant='h3' color="ActiveBorder" >{titulo}</StyledTitulo>
        <Typography variant='span' component='span' color="ActiveBorder" sx={{fontSize: '20px'}}>{descripcion}</Typography>
        <Box sx={{ marginTop: '1.2rem' }}>
          <MuiButton component='a' variant="outlined" href={repositorio} sx={BotonRepo}>Repositorio</MuiButton>
          <MuiButton component='a' variant="Contained" href={demo} sx={BotonDemo}>Ver demo</MuiButton>
        </Box>
      </StyledInfo>
    </StyledPaper>
  );
}


export default CardProyec;