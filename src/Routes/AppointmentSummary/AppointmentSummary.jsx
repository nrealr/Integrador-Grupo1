import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { ModalComponent } from '../../Components/ModalComponent';
import { BookingStepper } from '../../Components';
import { Link, useLocation } from 'react-router-dom';
import { useDoctorStates } from '../../Context';
import queryString from 'query-string';
import './AppointmentSummary.styles.css';
import { ROUTES } from '../../Constants';
import { scheduleAppointment } from '../../Services';

export const AppointmentSummary = () => {
    const location = useLocation();
    const doctorDetails = queryString.parse(location.search);
    const selectedTimeSlot = JSON.parse(doctorDetails.selectedTimeSlot); // Parse selectedTimeSlot as JSON
    const selectedDate = doctorDetails.selectedDate;

    if (!selectedTimeSlot || !selectedDate) {
        return (
            <div className='summary'>
                <Typography variant="h3" sx={{ color: 'white', backgroundColor: 'primary.light', padding: '2.5rem 1rem 1.5rem' }}>
                    Appointment Booking
                </Typography>
                <BookingStepper activeStep={2} />
                <Container>
                    <Typography variant="h4" sx={{ color: 'black' }}>Appointment details are missing. Please try again.</Typography>
                    <Button component={Link} to={ROUTES.HOME}>Go Back Home</Button>
                </Container>
            </div>
        );
    }

    const { currentUser } = useDoctorStates();
    const formattedDate = selectedDate.split(' ')[0] + ' ' + selectedDate.split(' ')[1] + ' ' + selectedDate.split(' ')[2] + ' ' + selectedDate.split(' ')[3];

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleConfirm = async () => {
        try {
            // Prepare data for scheduling appointment
            const appointmentDetails = {
                doctorId: doctorDetails.doctorId,
                patientId: currentUser.id,
                startTime: selectedTimeSlot.startTime,
                endTime: selectedTimeSlot.endTime,
            };

            // Call the function to schedule the appointment
            const response = await scheduleAppointment(appointmentDetails);

            console.log('Schedule appointment response:', response);

            // Handle success or error response
            if (response && response.status === 'Scheduled') {
                setMessage('Appointment booked successfully!');
                setError(false);
            } else {
                setMessage('An error occurred while booking appointment. Please check availability again.');
                setError(true);
            }

            setIsOpen(true); // Open modal with message
        } catch (error) {
            console.error('Error scheduling appointment:', error);
            setMessage('Error scheduling appointment. Please try again later.');
            setError(true);
            setIsOpen(true); // Open modal with error message
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        if (!error) {
            window.location.href = '/profile/appointments'; // Redirect on success
        }
    };

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
                    <p>Name: {currentUser.name} {currentUser.lastname}</p>
                    <p>Email: {currentUser.email}</p>
                </div>
                <div>
                    <h2>Schedule:</h2>
                    <p>Date: {formattedDate}</p>
                    <p>Hour: {selectedTimeSlot.startTime.slice(11, 16)} - {selectedTimeSlot.endTime.slice(11, 16)}</p> {/* Display formatted time */}
                </div>
                <Button className='confirm' onClick={handleConfirm}>Confirm</Button>
                <ModalComponent
                    isOpen={isOpen}
                    onClose={handleClose}
                    message={message}
                    error={error}
                    redirectUrl={error ? '' : '/profile/appointments'}
                />
            </Container>
        </div>
    );
};




