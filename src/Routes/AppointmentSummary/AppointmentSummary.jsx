import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { BookingStepper } from '../../Components/BookingStepper/BookingStepper'
import "./AppointmentSummary.styles.css"

export const AppointmentSummary = () => {
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
                <div>Selected date</div>
                <Button>Confirm</Button>
            </Container>
        </div>
    )
}

