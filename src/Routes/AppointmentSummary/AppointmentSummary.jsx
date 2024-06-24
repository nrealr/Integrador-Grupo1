import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { BookingStepper } from '../../Components/BookingStepper/BookingStepper';
import "./AppointmentSummary.styles.css";
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import { useDoctorStates } from '../../Context';

export const AppointmentSummary = () => {
    const location = useLocation();
    const doctorDetails = queryString.parse(location.search);
    const {currentUser} = useDoctorStates();


    if (!doctorDetails.name) {
        return (
            <div className='summary'>
                <Typography variant="h3" sx={{ color: 'white', backgroundColor: 'primary.light', padding: '2.5rem 1rem 1.5rem' }}>
                    Appointment Booking
                </Typography>
                <BookingStepper activeStep={2} />
                <Container>
                    <Typography variant="h4" sx={{ color: 'black' }}>Doctor Details Not Available, Please Try Later. Sorry For The Inconvenience</Typography>
                    <Button component={Link} to={ROUTES.HOME}>Go Back Home</Button>
                </Container>
            </div>
        );
    }

    return (
        <div className='summary'>
            <Typography variant="h3" sx={{ color: 'white', backgroundColor: 'primary.light', padding: '2.5rem 1rem 1.5rem' }}>
                Appointment Booking
            </Typography>
            <BookingStepper activeStep={2} />
            <Container>
                <div>AppointmentSummary</div>
                <div>
                    <h2>Specialist:</h2>
                    <p>Name: Dr. {doctorDetails.name} {doctorDetails.lastname}</p>
                    <p>Specialty: {doctorDetails.specialty}</p>
                </div>
                <div>
                    <h2>Location:</h2>
                    <p>Location: {doctorDetails.location}</p>
                    <p>Address: {doctorDetails.locationAddress}</p>                   
                </div>
                <div>
                    <h2>Patient:</h2>
                    <p>{currentUser.name} {currentUser.lastname}</p>
                    <p>{currentUser.email}</p>
                </div>
                <div>
                    <h2>Schedule:</h2>
                    <p>Specific Day</p>
                    <p>Specific Hour</p>
                </div>
                <Button>Confirm</Button>
            </Container>
        </div>
    );
};
