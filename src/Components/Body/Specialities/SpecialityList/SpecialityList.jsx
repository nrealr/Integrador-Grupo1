import React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
/*import './SpecialityList.styles.css';*/
import { SpecialityCard } from '../SpecialityCard';
import { specialties } from '../../../../Constants';


export const SpecialityList = () => (
    <Container sx={{ mb: 10, mt: {xs: 10, sm: 10, md: 10} }} >
        <Grid container spacing={2} sx={{ mt: { md: '7', lg: '5'} }}>
            <Grid item xs={12} md={4}>
                <Box sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-start',
                    borderRadius: { sm: '0px', md: '20px' },
                    backgroundColor: {md: 'secondary.light'},
                    padding: { md: 5 },
                    paddingTop: { md: 14 },
                    }}>
                    <Typography variant="h4" component="div" gutterBottom sx={{ 
                        textAlign: 'left', 
                        color: {xs: 'primary.main', sm: 'primary.main', md: 'white'}, 
                        fontSize: { xs: '1.3rem', sm:'1.5rem', md: '1.6rem', lg: '1.9rem' },
                        fontWeight: 'bold', }}>
                    Discover Our Medical Specialties
                    </Typography>
                    <Typography variant="subtitle1" component="div" color='primary' sx={{ 
                        textAlign: 'left', 
                        fontSize: { xs: '0.9rem', sm: '0.9rem', md: '1rem', lg: '1.2rem' },
                        fontWeight: 'regular' }}>
                    Find top specialists and book your appointment easily.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={8}>
            <Box sx={{ 
                    backgroundColor: 'lightgrey', 
                    padding: {xs: 2, sm: 4}, 
                    borderRadius: 4 
                }}>
                    <Grid container spacing={2}>
                        {specialties.slice(0, 6).map((speciality, index) => (
                            <Grid item xs={6} sm={6} md={4} key={index}>
                                <SpecialityCard category={speciality} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </Container>
);