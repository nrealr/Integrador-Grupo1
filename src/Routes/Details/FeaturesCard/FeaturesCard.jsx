import * as React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import axios from 'axios';
import { Icon } from '@mui/material';
import { SERVER_API } from '../../../Constants';



/**
@returns{React.Component} this function is a call of features card. Get an object with data and put in a grid different cards with a title, 
description and a icon  */

export const FeaturesCard = ({ doctorId }) => {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${SERVER_API}/doctors/${doctorId}/features`)
      .then(response => {
        const doctor = response.data;
        if (doctor.features) {
          setCards(doctor.features.map(feature => ({
            id: feature.id,
            name: feature.name,
            // Transformación de la imagen
            icon: feature.icon && `data:image/jpg;base64,${feature.icon}`,
          })));
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [doctorId]);

  return (
    <Grid>
      {cards.map(card => (
        <Grid>
          <Card sx={{ minHeight: '100%' }}>
            <CardMedia
              component="div"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
                backgroundColor: 'primary.main',
                color: 'black',
              }}
            >
              <Icon></Icon>
            </CardMedia>
            <CardContent 
              component="div"
              sx={{
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'space-evenly',
                textAlign: 'center'
              }}>
              <Typography variant="body2" color="text.secondary">
                <img src={card.icon} alt="Icono" style={{ width: '100px', height: 'auto' }} />
              </Typography>
              <Typography variant="h5" component="h2">
                {card.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};