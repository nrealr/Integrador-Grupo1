import { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { ModalComponent } from '../../Components/ModalComponent';
import { BookingStepper } from '../../Components';
import { Link, useLocation } from 'react-router-dom';
import { useDoctorStates } from '../../Context';
import queryString from 'query-string';
import './AppointmentSummary.styles.css';
import { ROUTES } from '../../Constants';

export const AppointmentSummary = () => {
    const location = useLocation();
    const doctorDetails = queryString.parse(location.search);
    const selectedTimeSlot = JSON.parse(doctorDetails.selectedTimeSlot); // Parsea el objeto selectedTimeSlot desde la URL
    const selectedDate = doctorDetails.selectedDate;

    console.log("Selected Time Slot:", selectedTimeSlot);

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

    // Extraer las horas de startTime y endTime en formato "HH:mm"
    const startTime = selectedTimeSlot.startTime.slice(11, 16); // Extrae "16:00" de "2024-06-24T16:00:00"
    const endTime = selectedTimeSlot.endTime.slice(11, 16); // Extrae "17:00" de "2024-06-24T17:00:00"

    const { currentUser } = useDoctorStates();
    const formattedDate = selectedDate.split(' ')[0] + ' ' + selectedDate.split(' ')[1] + ' ' + selectedDate.split(' ')[2] + ' ' + selectedDate.split(' ')[3];

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleConfirm = () => {
        const response = {
            data: {
                success: true,
                message: 'Appointment booked successfully!'
            }
        };

        if (response.data.success) {
            setMessage('Appointment booked successfully!');
            setError(false);
        } else {
            setMessage('Error booking appointment: ', response.data.message);
            setError(true);
        }
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        if (!error) {
            window.location.href = '/profile/appointments';
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
                    <p>Name: {currentUser.name} {currentUser.lastname}</p>
                    <p>Email: {currentUser.email}</p>
                </div>
                <div>
                    <h2>Schedule:</h2>
                    <p>Date: {formattedDate}</p>
                    <p>Hour: {startTime} - {endTime}</p> {/* Renderiza las horas en formato "HH:mm" */}
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

