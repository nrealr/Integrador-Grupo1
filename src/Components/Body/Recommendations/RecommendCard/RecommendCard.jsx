import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import './RecommendCard.styles.css'
import { FavoriteIcon, RatingBox, ShareButton, capitalizeFirstLetter } from '../../../../Utils';
import { ROUTES } from '../../../../Constants';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from 'react-router-dom';


export const RecommendCard = ({ doctor }) => {

    doctor.urlImg = 'data:image/jpg;base64,' + doctor.img;

    return (
        <Card className='recommend-card' sx={{ maxWidth: 345 }} elevation={10}>
            <div style={{ position: 'relative' }}>

                <CardMedia

                    component="img"

                    alt={`Photo of Dr. ${doctor.name} ${doctor.lastname}`}

                    height="140"

                    // image={doctor.urlImg}

                    image="\images\AvatarRandomDoctor.png"

                />

                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        zIndex: 1
                    }}
                >
                    <FavoriteIcon/>
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

                <IconButton
                    className='icn-view-more'
                    component={Link} to={ROUTES.DETAIL}
                    color='secondary'
                >
                    <ReadMoreIcon />
                </IconButton>

            </CardContent>

            <CardActions className='cardAction-box'>
                <ShareButton />
                <RatingBox />
            </CardActions>

        </Card>
    );
};


