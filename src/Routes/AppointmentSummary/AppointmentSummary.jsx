import { Button, Container } from '@mui/material'
import React from 'react'
import "./AppointmentSummary.styles.css"

export const AppointmentSummary = () => {
    return (
        <div className='summary'>
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

