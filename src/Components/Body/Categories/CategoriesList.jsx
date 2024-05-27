import React from 'react';
import {CategoryButton} from './CategoryButton';
import { categories } from '../../../Constants';
import { Box, Grid, Button } from '@mui/material';
import './CategoriesList.styles.css';

export const CategoriesList = () => (
  <Box>
    <Grid container spacing={2}>
      {categories.map((category, index) => (
        <Grid item xs={12} sm={6} md={12} key={index}>
          <Button variant="outlined" fullWidth onClick={() => console.log(`Clicked on ${category}`)}>
            {category}
          </Button>
        </Grid>
      ))}
    </Grid>
  </Box>
  /*<div className="categories-list">
    {categories.map((category, index) => (
      <CategoryButton key={index} name={category} />
    ))}
  </div>*/
);
