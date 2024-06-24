import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { BookingStepper } from '../../Components/BookingStepper/BookingStepper';
import "./AppointmentSummary.styles.css"
import { useLocation } from "react-router-dom";

export const AppointmentSummary = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedDate = searchParams.get('selectedDate');
    const selectedTimeSlot = searchParams.get('selectedTimeSlot');

    return (
        <div className='summary'>
            <Typography variant="h3" sx={{ color: 'white', backgroundColor: 'primary.light', padding: '2.5rem 1rem 1.5rem' }}>
                Appointment Booking
            </Typography>
            <BookingStepper activeStep={2} /> {/* Add Stepper with activeStep set to 2 */}
            <Container>
                <div>AppointmentSummary</div>
                <div>Appointment Details</div>
                <div>User Summary Information</div>
                <div>Selected date: {selectedDate}</div>
                <div>Selected time slot: {selectedTimeSlot}</div>
                <Button>Confirm</Button>
            </Container>
        </div>
    );
};





