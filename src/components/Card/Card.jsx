import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import styled from 'styled-components';
import { cenizaClaro } from '../Variables';

const CardStyled = {
  width: "120px",
  height: "130px",
  display: 'flex',
  backgroundColor: cenizaClaro, // Assuming cenizaClaro is a defined variable
  flexDirection: 'column',
  justifyContent: 'flex-end',
  textAlign: 'left',
  transition: 'all 0.2s ease-in', // There should be no space between "ease" and "-in"

  '&:hover': { // The :hover pseudo-class should be outside the backticks
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    transform: 'scale(1.1)',
  },
};

const MuiCard = ({ image, alt }) => {

  return (
    <Card sx={CardStyled}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={{ width: '2.5rem', paddingLeft: '0.75rem' }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {alt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MuiCard;

// const StyledCard = styled(Card)`
//   width: 120px;
//   height: 130px;
//   display: flex;
//   background-color: ${cenizaClaro};
//   flex-direction: column;
//   justify-content: end;
//   text-align: left;
//   transition: all 0.2s ease -in;

//     &:hover{
//       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
//       transform: scale(1.1);
//     }
// `