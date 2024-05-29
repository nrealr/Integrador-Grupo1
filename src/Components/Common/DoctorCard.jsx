import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from "@mui/material";
import { base64ToBlob } from "../../Utils";
/*import "./DoctorCard.styles.css";*/

export const DoctorCard = ({ doctor }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (doctor.img) {
      console.log('Type of doctor.img:', typeof doctor.img);
      console.log('Is Uint8Array:', doctor.img instanceof Uint8Array);
      console.log('First 100 characters:', typeof doctor.img === 'string' ? doctor.img.slice(0, 100) : '');

      if (doctor.img instanceof Uint8Array) {
        const blob = new Blob([doctor.img], { type: 'image/jpeg' }); // Ajusta el tipo MIME según tu imagen
        const objectURL = URL.createObjectURL(blob);
        setImageSrc(objectURL);
      } else if (typeof doctor.img === 'string' && doctor.img.startsWith('data:image/')) {
        const blob = base64ToBlob(doctor.img, 'image/jpeg'); // Ajusta el tipo MIME según tu imagen
        const objectURL = URL.createObjectURL(blob);
        setImageSrc(objectURL);
      } else {
        setImageSrc(doctor.img);
      }
    }
  }, [doctor]);

  return (
    <Card sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, 
      margin: '1rem', 
      boxShadow: 3 }}>
    <CardMedia
      component="img"
      sx={{ width: { xs: '100%', sm: 250, md: 200 }, height: { xs: 'auto', md: '100%' } }}
      image={imageSrc || '/images/default-doctor.jpg'}
      alt={`Photo of Dr. ${doctor.name} ${doctor.lastname}`}
    />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Dr. {doctor.name} {doctor.lastname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {doctor.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }} >
          <Button 
            component={Link}
            to={`/doctor/${doctor.id}`}
            variant="contained" 
            color="primary"
          >
            Find out more →
          </Button>
        </CardActions>
      </Box>
    </Card>
    /*<div className='doctorCard-container'> 
      <div className='containerInfo'>
        
        <div>
        <h2>Dr. {doctor.name} {doctor.lastname}</h2>
        <p>{doctor.description}</p>
        </div>

        <div>
          <Link className="cardButton" to={`/doctor/${doctor.id}`}>
            <span>Find out more&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→</span>
          </Link>
        </div>

      </div>
      <div>
        <img className='avatarDoc'
          src={doctor.img}
        />
      </div>
    </div>*/
  );
};

