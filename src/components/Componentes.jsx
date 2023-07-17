import styled from 'styled-components';
import { blanco, fuschia, azul } from './Variables';
import Button from '@mui/material/Button';

const StyledButon = styled.button`
  width: 100%;
  color: ${blanco} ;
  background-color: ${fuschia};
  padding: 0.3rem 1rem;
  border-radius: 0.3rem;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out; 
  &:hover{
    background-color: ${azul}
  }
  `

const MuiButton = ({ children,href }) => {
  const blanco = "#FFFFFF";

  const estiloBoton = {
    color: blanco,
    borderColor: blanco,
    marginRight: '0.75rem'
  };

  return (
    <Button variant="outlined" sx={estiloBoton} href={href} target='_blank'>
      {children}
    </Button>
  );
};



export {StyledButon, MuiButton };