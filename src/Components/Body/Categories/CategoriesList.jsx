import React from 'react';
import { categories } from '../../../Constants';
import { Box, Grid, Button } from '@mui/material';
import './CategoriesList.styles.css';
import { SpecialityCard } from './SpecialityCard';



export const CategoriesList = () => (

  <Box >

    <Grid container spacing={2}>
      {categories.map((category, index) => (
        <Grid item key={index}>
          <SpecialityCard category={category} />
        </Grid>
      ))}
    </Grid>

  </Box>

);