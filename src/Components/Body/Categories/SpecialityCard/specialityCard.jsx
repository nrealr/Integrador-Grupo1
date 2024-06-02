import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import './SpecialityCard.styles.css'
import { RatingBox } from '../../../../Utils';

export const SpecialityCard = ({ category }) => {
  return (
    <Card className='speciality-card' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={category.name}
        height="140"
        image="\public\images\specialitysCard.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {category.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <RatingBox/>
      </CardActions>
    </Card>
  );
};