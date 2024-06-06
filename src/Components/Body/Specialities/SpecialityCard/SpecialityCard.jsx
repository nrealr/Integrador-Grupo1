import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import './SpecialityCard.styles.css'
import { RatingBox, ShareButton } from '../../../../Utils';


export const SpecialityCard = ({ category }) => {
    return (
        <Card className='speciality-card' sx={{ maxWidth: 345 }} elevation={10}>
            <CardMedia
                component="img"
                alt={category.name}
                height="140"
                image="\images\specialitysCard.png"
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Speciality name - {category.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Speciality description - {category.description}
                </Typography>
            </CardContent>

            <CardActions className='cardAction-box'>
                <ShareButton />
                <RatingBox />
            </CardActions>

        </Card>
    );
};