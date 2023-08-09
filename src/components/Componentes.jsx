import { styled } from '@mui/material/styles';
import { blanco, fuschia, azul } from './Variables';
import Button from '@mui/material/Button';

const StyledButon = styled('button')({
  width: '100%',
  color: blanco,
  backgroundColor: fuschia,
  padding: '0.3rem 1rem',
  borderRadius: '0.3rem',
  fontSize: '18px',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: azul,
  },
});

const EstiloBoton = styled(Button)({
  color: blanco,
  borderColor: blanco,
  marginRight: '0.75rem'
});

const MuiButton = ({ children, href, endIcon, component, sx, variant }) => {

  return (
    <EstiloBoton sx={sx} variant={variant} component={component} href={href} target='_blank' endIcon={endIcon} rel="noopener noreferrer">
      {children}
    </EstiloBoton>
  );
};



export { StyledButon, MuiButton};