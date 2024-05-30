import * as React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import axios from 'axios';
import { Icon } from '@mui/material';

const categories = [
  { id: 1, title: 'Online Consultation', description: 'Descripción de Online Consultation', icon: "/images/Telemedicine.jpg" },
  // { id: 2, title: 'Home Visits', description: 'Descripción de Home Visits', icon: "/images/Fonasa.jpg" },
  { id: 3, title: 'Emergency Services', description: 'Descripción de Emergency Services', icon: '/images/Emergency.jpg' },
  { id: 4, title: 'Pediatric Care', description: 'Descripción de Pediatric Care', icon: '/images/Pediatric.jpg' },
  { id: 5, title: 'Geriatric Care', description: 'Descripción de Geriatric Care', icon: '/images/Geriatric.jpg' },
  { id: 6, title: 'Chronic Disease management', description: 'Descripción de Chronic Disease management', icon: '/images/Chronic.jpg' },
  { id: 7, title: 'Mental Health Services', description: 'Descripción de Mental Health Services', icon: '/images/Mental.jpg' },
  // { id: 8, title: 'Rehabilitation Services', description: 'Descripción de Rehabilitation Services', icon: '/images/Rehabilitation.jpg' },
  // { id: 9, title: 'Diagnostic Services', description: 'Descripción de Diagnostic Services', icon: '/images/Diagnostic.jpg' },
  // { id: 10, title: 'Preventive Care', description: 'Descripción de Preventive Care', icon: '/images/Preventive.jpg' },
];


/**
@returns{React.Component} this function is a call of categories card. Get an object with data and put in a grid different cards with a title, 
description and a icon  */

export const CategoriesCard = () => {
  const [cards, setCards] = React.useState(categories);

  React.useEffect(() => {
    axios.get('https://api.example.com/categories')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {cards.map(card => (
        <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
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
              <Icon><img width={25} src={card.icon} alt="" /></Icon>
            </CardMedia>
            <CardContent>
              <Typography variant="h5" component="h2">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

