import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import styled from 'styled-components';

// width: 120px;
// height: 130px;
// background: var(--blanco);
// display: flex;
// flex - direction: column;
// justify - content: end;
// padding: 1rem;
// text - align: left;
// margin - bottom: 1.5rem;
// transition: all 0.2s ease -in;


const StyledCard = styled(Card)`
  width: 120px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: left;
  transition: all 0.2s ease -in;

    &:hover{
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      transform: scale(1.1);
    }
`

const MuiCard = ({ image, alt }) => {

  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={{ width: '2.5rem', paddingLeft: '0.75rem', }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {alt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

export default MuiCard;