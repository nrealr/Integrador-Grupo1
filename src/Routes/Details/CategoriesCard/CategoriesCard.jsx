import * as React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const categories = [
  { id: 1, title: 'Online Consultation', description: 'Descripción de Online Consultation' },
  { id: 2, title: 'Home Visits', description: 'Descripción de Home Visits' },
  { id: 3, title: 'Emergency Services', description: 'Descripción de Emergency Services' },
  { id: 4, title: 'Pediatric Care', description: 'Descripción de Pediatric Care' },
  { id: 5, title: 'Geriatric Care', description: 'Descripción de Geriatric Care' },
  { id: 6, title: 'Chronic Disease management', description: 'Descripción de Chronic Disease management' },
  { id: 7, title: 'Mental Health Services', description: 'Descripción de Mental Health Services' },
  { id: 8, title: 'Rehabilitation Services', description: 'Descripción de Rehabilitation Services' },
  { id: 9, title: 'Diagnostic Services', description: 'Descripción de Diagnostic Services' },
  { id: 10, title: 'Preventive Care', description: 'Descripción de Preventive Care' },
];

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
          <Card>
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

