import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import './RecommendCard.styles.css'
import { RatingBox, ShareButton } from '../../../../Utils';
import { ROUTES } from '../../../../Constants';


export const RecommendCard = ({ doctor }) => {
    return (
        <Card className='recommend-card' sx={{ maxWidth: 345 }} elevation={10}>
            <CardMedia
                component="img"
                alt={`Photo of Dr. ${doctor.name} ${doctor.lastname}`}
                height="140"
                image="\images\AvatarRandomDoctor.png"
                // image={doctor.urlImg}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Dr. {doctor.name} {doctor.lastname}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    About me: {doctor.description}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    My speciality: {doctor.specialty}
                </Typography>
                <Button LinkComponent={ROUTES.DETAIL}>Find out more</Button>

            </CardContent>

            <CardActions className='cardAction-box'>
                <ShareButton />
                <RatingBox />
            </CardActions>

        </Card>
    );
};