import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RatingBox } from '../../../../Utils';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="specliality img"
        height="140"
        image="\public\images\specialitysCard.png"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          Specialty
        </Typography>

        <Typography variant="body2" color="text.secondary">
          "-Speciality info here--"
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <RatingBox/>
      </CardActions>
    </Card>
  );
}
