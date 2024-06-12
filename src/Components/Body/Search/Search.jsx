import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, FormControl, Button, Grid, InputLabel, Select, MenuItem } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
import { SearchBar } from '../../Searchbar/SearchBar';
import { ROUTES } from '../../../Constants/routes'; 
import { getLocations } from '../../../Services/Locations/getLocations';

export const Search = () => {
  const [city, setCity] = useState('');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationsData = await getLocations();
        setLocations(locationsData);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleOptionSelect = (doctor) => {
    setSelectedOption(doctor);
  };

  const handleButtonClick = () => {
    const selectedLocation = locations.find(location => location.id === city);
    const locationName = selectedLocation ? selectedLocation.name : '';

    const queryParams = new URLSearchParams({
      query: locationName || inputValue,
    }).toString();

    if (selectedOption && selectedOption.id) {
      navigate(`doctors/${selectedOption.id}`);
    } else {
      navigate(`${ROUTES.SEARCHRESULTS}?${queryParams}`);
    }
  };

  const isButtonDisabled = !city && !inputValue;

  return (
    <Box sx={{ width: '100%', marginTop: { xs: '3.5rem', sm: '4rem' }, position: 'relative' }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '30vh', sm: '35vh', md: '40vh', lg: '41vh', xl: '58vh' },
          backgroundImage: 'url(./images/bg-hero-doctor.png)',
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'right', md: 'right', lg: 'right', xl: 'right' },
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          marginBottom: { xs: '8rem', sm: '10rem', md: '4rem' },
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
              fontSize: { xs: '1.3rem', sm: '1.8', md: '2.1rem', lg: '3rem' },
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
              fontSize: { xs: '0.8rem', sm: '1.1', md: '1.4rem', lg: '1.8rem' },
            }}
          >
            WE HANDLE YOUR MEDICAL BOOKINGS
          </Typography>
        </Container>
      </Box>
      <Box sx={{
          position: 'absolute',
          top: { xs: 'calc(33vh - 40px)', sm: 'calc(38vh - 40px)', md: 'calc(36vh - 40px)', lg: 'calc(38vh - 40px)', xl: 'calc(54vh - 20px)' },
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }} >
        <Grid
          container
          justifyContent="center"
          sx={{
            marginTop: { xs: '0rem', sm: '0rem', md: '0rem' },
          }}
        >
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Box
              sx={{
                backgroundColor: 'secondary.light',
                padding: { xs: '1rem', sm: '1rem 2rem 2rem 2rem', md: '1rem 2rem 2rem 2rem' },
                borderRadius: { sm: '0px', md: '20px' },
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
                  color: 'white',
                }}
              >
                <AccessTimeIcon sx={{ marginRight: '0.5rem', color: 'white', fontSize: { xs: '1rem', md: '1.5rem', lg: '3rem' } }} />
                Appointment Booking
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: { sm: '0rem', md: '1rem' },
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FormControl fullWidth sx={{ mb: { xs: '1rem', md: '0' }, flex: 1.6, fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                  <SearchBar
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    value={selectedOption}
                    setValue={setSelectedOption}
                    searchResult={handleOptionSelect}
                    onEnterPress={handleButtonClick} 
                  />
                </FormControl>
                
                <FormControl fullWidth sx={{ mb: { xs: '1rem', md: '0' }, flex: 1.1, fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                  <InputLabel
                    sx={{
                      color: 'grey',
                      fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                    }}
                  >
                    Choose Location 
                  </InputLabel>
                  <Select
                    value={city}
                    onChange={handleCityChange}
                    sx={{ backgroundColor: 'white', color: 'black',
                    '& .MuiSelect-select': {
                      fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
                    }
                    }}
                  >
                    {locations.map((location) => (
                      <MenuItem key={location.id} value={location.id}>
                        {location.name}
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
                    padding: { xs: '0.4rem', md: '0.75rem 1.2rem' },
                    flex: 1,
                  }}
                  onClick={handleButtonClick}
                  disabled={isButtonDisabled}
                >
                  Search
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
