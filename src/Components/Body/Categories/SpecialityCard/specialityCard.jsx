import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import './SpecialityCard.styles.css'
import { RatingBox, ShareButton } from '../../../../Utils';
import ShareIcon from '@mui/icons-material/Share';


export const SpecialityCard = ({ category }) => {
    return (
        <Card className='speciality-card' sx={{ maxWidth: 345 }} elevation={10}>
            <CardMedia
                component="img"
                alt={category.name}
                height="140"
                image="\public\images\specialitysCard.png"
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
                <Button className='shareInfo'
                    size="small"
                    startIcon=
                    {<ShareIcon fontSize="small" color='primary' />}
                    alt="shareInformation">
                    Share
                </Button>
                {/* <ShareButton/> */}
                <RatingBox />
            </CardActions>

        </Card>
    );
};