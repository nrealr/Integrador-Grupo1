import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import './SpecialityList.styles.css';
import { SpecialityCard } from '../SpecialityCard';
import { specialties } from '../../../../Constants';



export const SpecialityList = () => (
  <Container>
    <Box>

      <Grid container spacing={2}>
        {specialties.map((index, speciality, description) => (
          <Grid item key={index}>
            <SpecialityCard category={speciality} />
          </Grid>
        ))}
      </Grid>

    </Box>
  </Container>

);