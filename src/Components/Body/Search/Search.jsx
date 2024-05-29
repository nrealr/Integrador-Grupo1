import React, { useState } from 'react';
import { Box, Container, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
/*import "./Search.styles.css";
import { Dropdown } from '../../../Utils';*/



/**
 * 
 * @returns {React.Component} section box with dropdown and search button
 */

export const Search = () => {

  const [city, setCity] = useState('');
  const cityOptions = [

    { label: 'Antofagasta', value: 'antofagasta' },
    { label: 'Arica', value: 'arica' },
    { label: 'Calama', value: 'calama' },
    { label: 'Chillán', value: 'chillan' },
    { label: 'Concepción', value: 'concepcion' },
    { label: 'Copiapó', value: 'copiapo' },
    { label: 'Iquique', value: 'iquique' },
    { label: 'La Serena', value: 'la-serena' },
    { label: 'Puerto Montt', value: 'puerto-montt' },
    { label: 'Santiago', value: 'santiago' },
  ];

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const [specialty, setSpecialty] = useState('');
  const specialtyOptions = [
    { label: 'Internal Medicine', value: 'internal-medicine' },
    { label: 'Dermatology', value: 'dermatology' },
    { label: 'Obstetrics and Gynecology', value: 'obstetrics-and-gynecology' },
    { label: 'Psychiatry', value: 'psychiatry' },
    { label: 'Pediatrics', value: 'pediatrics' },
    { label: 'Cardiology', value: 'cardiology' },
    { label: 'Ophthalmology', value: 'ophthalmology' },
    { label: 'Orthopedics', value: 'orthopedics' },
  ];

  const handleSpecialtyChange = (event) => {
    setSpecialty(event.target.value)
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxHeight: {xs: '65vh'},
        minHeight: {lg: '75vh'},
        backgroundImage: 'url(./images/bg-search.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: {xs: '25% 25%', sm: 'right'},
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth="false"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          padding: { xs: '2rem', md: '4rem' },
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'secondary.main',
            marginBottom: '1rem',
            textAlign: 'center',
            fontSize: { xs: '1.5rem', md: '2rem' },
          }}
        >
          WE HANDLE YOUR MEDICAL BOOKINGS
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            marginBottom: '2rem',
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          EASY BOOKING, SAFE CARE!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '1rem',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FormControl fullWidth sx={{ mb: { xs: '1rem', md: '0' } }}>
            <InputLabel sx={{ color: 'black' }}>Select a city</InputLabel>
            <Select
              value={city}
              onChange={handleCityChange}
              sx={{ backgroundColor: 'white', color: 'black' }}
            >
              {cityOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: { xs: '1rem', md: '0' } }}>
            <InputLabel sx={{ color: 'black' }}>Select a specialty</InputLabel>
            <Select
              value={specialty}
              onChange={handleSpecialtyChange}
              sx={{ backgroundColor: 'white', color: 'black' }}
            >
              {specialtyOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              color: 'white',
              fontSize: { xs: '0.875rem', md: '1rem' },
              width: { xs: '100%', md: 'auto' },
              padding: { xs: '1rem', md: '0.75rem 1.5rem' },
            }}
          >
            Search
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

