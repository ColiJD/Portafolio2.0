import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { stark } from '../../Variables';

const StyledCard = {
  width: '300px',
  height: 'auto',
  backgroundColor: `${stark}`,
  transition: 'transform 1.5s, border-radius 1.5s', // Optimizar transiciones

  '&:hover': {
    transform: 'scale(1.1)',
    borderRadius: '0.75rem',
  },

  '@media screen and (max-width: 480px)': {
    marginBottom: '1.2rem',
    width: '100%',
    height: 'auto',
  },
};

const CardEducacion = ({ image, alt, subtitulo, anio }) => {
  return (
    <Card sx={StyledCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={{
            height: 150, // Ajuste de altura para que se vea bien
            objectFit: 'cover', // Mantiene la imagen proporcional
            width: '100%', // Asegura que la imagen ocupe todo el ancho disponible
          }}
        />
        <CardContent sx={{ overflow: 'hidden', paddingBottom: '1rem' }}>
          <Typography variant="h6" color="text.secondary" noWrap>
            {subtitulo}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {anio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardEducacion;
