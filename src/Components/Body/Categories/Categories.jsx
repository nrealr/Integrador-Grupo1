import React from 'react';
import {CategoriesList} from './CategoriesList';
import './Categories.styles.css'
import { Container, Grid, Box, Typography, Button } from '@mui/material';

export const Categories = () => (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box sx={{ 
            padding: { xs: '2rem 1rem', md: '4rem' },
            backgroundImage: 'url(./images/bg-categories.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: { xs: 'auto', md: '600px' },
            width: { xs: 'auto', md: '600px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#fff',
            }}>
            <Typography 
              variant="h2" 
              sx={{
                color: 'secondary.main',
                marginBottom: { xs: '1rem', md: '2rem' },
                fontSize: { xs: '1.5rem', md: '2.125rem' },
              }}
              >
                Explore diverse medical specialties
            </Typography>
            <Typography 
              variant="h1" 
              sx={{ 
                marginBottom: { xs: '1rem', md: '2rem' }, 
                color: 'primary.main',
                fontSize: { xs: '2rem', md: '3rem' },
                }}
                >
              Discover a Wide Range of Specialties Awaited Just Below!
            </Typography>
            <Button 
              variant="contained" 
              color="secondary"
              sx={{
                  color: 'white',
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  
              }}>
              Check them here
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              padding: '2rem',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: 'black',
              height: '100%',
              display: { xs: 'block', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CategoriesList />
          </Box>
        </Grid>
      </Grid>
    </Container>
/*<div className="categories-container">
    <div className="column1">
      <h2>Explore diverse medical specialities</h2>
      <h1>Discover a Wide Range of Specialties Awaited Just Below!</h1>
      <div className="search-button">
        <button>Check them here</button>
      </div>
    </div>

    <div className="column2">
      <Container>
        <CategoriesList />
      </Container>
    </div>
  </div>*/
);


