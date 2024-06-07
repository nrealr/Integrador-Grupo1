import React, { useState } from 'react';
import { Box, Container, Typography, FormControl, InputLabel, Select, MenuItem, Button, TextField } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
/**
 * 
 * @returns {React.Component} section box with dropdown and search button
 */

export const Search = () => {
  const [city, setCity] = useState('');
  const cityOptions = [
    { label: 'Antofagasta', value: 'antofagasta' },
    { label: 'Calama', value: 'calama' },
    { label: 'Concepción', value: 'concepcion' },
    { label: 'Puerto Montt', value: 'puerto-montt' },
    { label: 'Santiago', value: 'santiago' },
  ];

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '40rem',
        backgroundImage: 'url(./images/bg-search.jpg)',
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      <Container
        sx={{
          textAlign: 'left',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            marginBottom: '0.5rem',
            letterSpacing: '1px',
            fontSize: { xs: '2rem', md: '2.2rem', lg: '3rem' },
            fontWeight: 'bold',
          }}
        >
          Easy Booking, Safe Care!
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            marginBottom: '1rem',
            fontSize: { xs: '1.5rem', md: '1.6rem', lg: '1.8rem' },
          }}
        >
          WE HANDLE YOUR MEDICAL BOOKINGS
        </Typography>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          bottom: '-80px',
          width: { xs: '90%', md: '70%' },
          backgroundColor: 'secondary.light',
          padding: '1rem 2rem 2rem 2rem',
          borderRadius: '20px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            fontSize: { xs: '1rem', md: '1.5rem', lg: '1.9rem' },
            fontWeight: 'bold',
          }}
        >
          <AccessTimeIcon sx={{ marginRight: '0.5rem', fontSize: { xs: '1rem', md: '1.5rem', lg: '3rem' } }} />
          Appointment Booking
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
          <FormControl fullWidth sx={{ mb: { xs: '1rem', md: '0' }, flex: 1.6 }}>
            <TextField
              label="Enter Speciality, Doctor Name or Services"
              value={city}
              onChange={handleCityChange}
              variant="outlined"
              sx={{ backgroundColor: 'white', color: 'black' }}
            />
          </FormControl>
          
          <FormControl fullWidth sx={{ mb: { xs: '1rem', md: '0', flex: 1.1 } }}>
            <InputLabel sx={{ color: 'grey' }}>Choose Location (Optional)</InputLabel>
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
          
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: 'white',
              fontSize: { xs: '0.875rem', md: '1rem' },
              width: { xs: '100%', md: 'auto' },
              padding: { xs: '1rem', md: '0.75rem 1.2rem' },
              flex: 1,
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

