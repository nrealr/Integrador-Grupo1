import React, { useContext, useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { FavoriteIcon, ShareButton, capitalizeFirstLetter } from '../../../../Utils';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from 'react-router-dom';
import { useDoctorStates } from '../../../../Context';
import './RecommendCard.styles.css';


export const RecommendCard = ({ doctor }) => {
  const { state, updateFavorites } = useDoctorStates();
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    if (state.isLoggedIn) {
      setFavorited(state.favorites.includes(doctor.id));
    }
  }, [state.favorites, doctor.id]);

  const handleFavoriteClick = async () => {
    if (!state.isLoggedIn) {
      // Puedes mostrar un mensaje o alerta aquí si lo deseas
      console.log('User is not logged in');
      return;
    }

    try {
      const newFavorites = favorited 
        ? state.favorites.filter(favId => favId !== doctor.id) 
        : [...state.favorites, doctor.id];

      await updateFavorites(newFavorites);
      setFavorited(!favorited);
    } catch (error) {
      console.error('Error updating favorites:', error);
    }
  };

  doctor.urlImg = 'data:image/jpeg;base64,' + doctor.img;

  return (
    <Card className='recommend-card' sx={{ maxWidth: 800 }} elevation={10}>
      <div style={{ position: 'relative' }}>
        <CardMedia
          component="img"
          alt={`Photo of Dr. ${doctor.name} ${doctor.lastname}`}
          height="150"
          image={doctor.urlImg}
        />
        <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
          <FavoriteIcon favorited={favorited} onClick={handleFavoriteClick} />
        </div>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dr. {capitalizeFirstLetter(doctor.name)} {capitalizeFirstLetter(doctor.lastname)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          About me: {doctor.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          My speciality: {doctor.specialty}
        </Typography>
        <Button
          className='icn-view-more'
          component={Link} to={`/doctors/${doctor.id}`}
          color='secondary'
          sx={{ textTransform: 'none' }}
        >
          <ReadMoreIcon /> View More
        </Button>
      </CardContent>

      <CardActions className='cardAction-box'>
        <ShareButton />
      </CardActions>
    </Card>
  );
};