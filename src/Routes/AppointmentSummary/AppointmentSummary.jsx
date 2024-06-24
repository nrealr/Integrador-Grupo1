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

    const timeParts = selectedTimeSlot.split('T');
    const startTime = timeParts[1].slice(0, 5);
    const endTime = timeParts[2].slice(0, 5);

    const formattedDate = selectedDate.split(' ')[0] + ' ' + selectedDate.split(' ')[1] + ' ' + selectedDate.split(' ')[2] + ' ' + selectedDate.split(' ')[3];
  

    return (
        <div className='summary'>
            <Typography variant="h3" sx={{ color: 'white', backgroundColor: 'primary.light', padding: '2.5rem 1rem 1.5rem' }}>
                Appointment Booking
            </Typography>
            <BookingStepper activeStep={2} />
            <Container>
                <div>AppointmentSummary</div>
                <div>Appointment Details</div>
                <div>User Summary Information</div>
                <div>Selected date: {formattedDate}</div>
                <div>Selected time: {startTime} - {endTime}</div>
                <Button>Confirm</Button>
            </Container>
        </div>
    );
};





