import React, { useContext, useEffect, useState } from 'react';
import { ContextGlobal } from '../../../Context';
import { getUserPreferences } from '../../../Services/Users';
import { getDoctorById } from '../../../Services/Doctors/getDoctorById';
import { Box, CircularProgress, Typography } from '@mui/material';
import { RecommendCard } from '../../../Components/Body/Recommendations/RecommendCard/RecommendCard';
import './Favorites.styles.css';

export const Favorites = () => {
  const { state } = useContext(ContextGlobal);
  const [favoriteDoctors, setFavoriteDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const preferences = await getUserPreferences();
        const doctorIds = preferences.favorites;
        const doctorDetailsPromises = doctorIds.map(async (id) => {
          try {
            const res = await getDoctorById(id);
            return res;
          } catch (error) {
            console.error(`Error fetching doctor with ID ${id}:`, error);
            return null;  // Return null if there's an error
          }
        });

        const doctorsData = await Promise.all(doctorDetailsPromises);
        const validDoctors = doctorsData.filter(doctor => doctor !== null);  // Filter out null doctors
        setFavoriteDoctors(validDoctors);
      } catch (error) {
        console.error('Error fetching favorite doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="favorites-container">
      <Box sx={{ textAlign: 'center', marginBottom: '3rem', marginTop: '7rem' }}>
        <Typography variant="h4" component="h3" sx={{color: 'primary.main'}}>Your Favorite Doctors</Typography>
        <Typography variant="h5" component="h4" sx={{color: 'secondary.light'}}>Doctors You Trust Most</Typography>
      </Box>
      <Box className="flex-container" sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem'
      }}>
        {favoriteDoctors.map((doctor) => (
          <Box className="flex-item" key={doctor.id} sx={{
            flexBasis: '40%',
            margin: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <RecommendCard doctor={doctor} />
          </Box>
        ))}
      </Box>
    </div>
  );
};
