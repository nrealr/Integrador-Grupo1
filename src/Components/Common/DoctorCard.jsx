import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from "@mui/material";
/*import "./DoctorCard.styles.css";*/

export const DoctorCard = ({ doctor }) => {
  return (
    <Card sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, 
      margin: '1rem', 
      boxShadow: 3 }}>
      <CardMedia
        component="img"
        sx={{ width: { xs: '100%', sm: 250, md: 200 }, height: { xs: 'auto', md: '100%' } }}
        image={doctor.img || '/images/default-doctor.jpg'}
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
        <CardActions>
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

