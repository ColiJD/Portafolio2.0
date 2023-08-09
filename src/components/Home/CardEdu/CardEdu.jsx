import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { stark } from '../../Variables';

const StyledCard = {
  width: '30%',
  height: '200px',
  backgroundColor: `${stark}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: 'all 1.5s',

  '&:hover': {
    transform: 'scale(1.1)',
    borderRadius: '0.75rem',
  },

  // '@media screen and (max-width: 768px)': {
  //     backgroundColor: 'red'
  // }
}

const CardEducacion = ({ image, alt, subtitulo, anio }) => {

    return (
      <Card sx={StyledCard}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={image}
            alt={alt}
            sx={{ height: 100 }}
          />
          <CardContent>
            <Typography variant="h5" color="text.secondary">{subtitulo}</Typography>
            <Typography variant="body2" color="text.secondary"> {anio}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

export default CardEducacion;