import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate para redireccionar
import { Box, Container, Typography, FormControl, Button } from '@mui/material';
import { SearchBar } from '../../Searchbar/SearchBar';
import { ROUTES } from '../../../Constants/routes'; 

export const Search = () => {
  const navigate = useNavigate();  // Hook para redireccionar
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');


  const handleOptionSelect = (doctor) => {
    setSelectedOption(doctor);
  };

  const handleButtonClick = () => {
    if (selectedOption && selectedOption.id) {
      navigate(`doctors/${selectedOption.id}`);
    } else {
      navigate(ROUTES.SEARCHRESULTS, { state: { query: inputValue } } );
    }
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
          marginLeft: {md: '-1px'},
          justifyContent: 'center',
          minHeight: '100vh',
          maxWidth: {md: '95vh'},
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'secondary.main',
            marginBottom: '1rem',
            textAlign: 'center',
            fontSize: { xs: '1.5rem', md: '1.6rem' },
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
            fontSize: { xs: '2rem', md: '2.2rem' },
          }}
        >
          EASY BOOKING, SAFE CARE!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'column' },
            gap: {md: '2rem', lg: '1rem'},
            width: {xs: '100%', sm: '100%', md: '80%', lg: '100%'},
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SearchBar
            inputValue={inputValue}
            setInputValue={setInputValue}
            value={selectedOption}
            setValue={setSelectedOption}
            searchResult={handleOptionSelect}
          />

          <Button
            variant="contained"
            color="secondary"
            sx={{
              color: 'white',
              fontSize: { xs: '0.875rem', md: '1rem' },
              width: { xs: '100%', md: 'auto' },
              padding: { xs: '1rem', md: '0.75rem 1.5rem' },
            }}
            onClick={handleButtonClick}
          >
            Search
          </Button>
        </Box>
      </Container>
    </Box>
  );
};