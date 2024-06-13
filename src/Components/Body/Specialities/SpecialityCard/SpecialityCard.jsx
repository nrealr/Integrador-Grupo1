import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const SpecialityCard = ({ category }) => {
  return (
    <Link to={`/results?query=${category.name}&location=`} style={{ textDecoration: 'none' }}>
      <Card sx={{ width: '100%', margin: '0 auto', borderRadius: 2 }} elevation={10}>
        <CardMedia
          component="img"
          alt={category.name}
          image={category.icon}
          height="100"
          sx={{ objectFit: 'contain', padding: '1rem' }}
        />
        <CardContent sx={{ padding: '10px', textAlign: 'center' }} >
          <Typography gutterBottom variant="h5" component="div" align='center' sx={{color: 'primary.main', fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }}} >
            {category.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};