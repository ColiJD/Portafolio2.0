import * as React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { stark } from '../Variables';

const StyledCard = styled(Card)`
    width: 30%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    transition: all 1.5s;
    &:hover {
    transform: scale(1.1);
    border-radius: 0.75rem;

}
`

const CardEducacion = ({ image, alt, subtitulo, anio }) => {

  return (
    <StyledCard sx={{ backgroundColor: `${stark}` }}>
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
    </StyledCard>
  );
}

export default CardEducacion;