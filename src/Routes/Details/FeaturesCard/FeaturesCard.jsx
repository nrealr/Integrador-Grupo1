import * as React from 'react';
import { Grid, Card, CardContent, Typography} from '@mui/material';
import axios from 'axios';
import { SERVER_API } from '../../../Constants';
import './FeaturesCard.styles.css'



/**
@returns{React.Component} this function is a call of features card. Get an object with data and put in a grid different cards with a title, 
description and a icon  */

export const FeaturesCard = ({ doctorId }) => {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${SERVER_API}/doctors/${doctorId}/features`)
      .then(response => {
        const doctor = response.data;
        if (doctor.features) {
          setCards(doctor.features.map(feature => ({
            id: feature.id,
            name: feature.name,
            // Transformación de la imagen
            icon: feature.icon && `data:image/jpg;base64,${feature.icon}`,
          })));
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [doctorId]);



  return (
    <div className="features-card-grid">
      {cards.map(card => (
        <Card className="features-card">
          <CardContent
            component="div"
            className="features-card-content"
          >
            <Typography variant="body2" color="text.secondary">
              <img src={card.icon} alt="Icono" className="features-card-icon" />
            </Typography>
            {/* <Typography variant="h5" component="h5" className="features-card-title">
              {card.name}
            </Typography> */}
            <h5 className='features-card-title'>{card.name}</h5>
            <Typography variant="body2" color="text.secondary" className="features-card-description">
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};