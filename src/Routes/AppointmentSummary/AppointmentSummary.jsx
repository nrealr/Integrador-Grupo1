import React, { useState } from 'react';
import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, makeStyles } from '@mui/material';
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

    const appointmentData = {
        specialistName: `${doctorDetails.name} ${doctorDetails.lastname}`,
        specialty: doctorDetails.specialty,
        location: doctorDetails.location,
        address: doctorDetails.locationAddress,
        patientName: `${currentUser.name} ${currentUser.lastname}`,
        email: currentUser.email,
        date: formattedDate,
        startTime: selectedTimeSlot.startTime.slice(11, 16),
        endTime: selectedTimeSlot.endTime.slice(11, 16),
      };

    return (
        <div className='summary'>
            <Typography variant="h3" sx={{ color: 'white', backgroundColor: 'primary.light', padding: '2.5rem 1rem 1.5rem' }}>
                Appointment Booking
            </Typography>
            <BookingStepper activeStep={2} />

            <Container sx={{ display: "flex", flexDirection: "column", marginBottom: 3}} >
            <Typography variant="h4" sx={{ textAlign: "center", paddingTop: 5, paddingBottom: 2}} >
                Your appointment data:
            </Typography>

            <TableContainer sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", backgroundColor: 'light', borderRadius: '8px', padding: '1rem' }}>
          <Table sx={{ width: 650, borderRadius: '8px', border: '1px solid', borderColor: 'primary.dark' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: 'primary.main', color: 'white', fontWeight: 'bold' }}>Field</TableCell>
                <TableCell sx={{ backgroundColor: 'primary.main', color: 'white', fontWeight: 'bold' }}>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ backgroundColor: 'primary.main', color: 'white', fontWeight: 'bold' }}>Specialist</TableCell>
                <TableCell sx={{ backgroundColor: 'primary.light' }}>{appointmentData.specialistName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ backgroundColor: 'primary.main', color: 'white', fontWeight: 'bold' }}>Specialty</TableCell>
                <TableCell sx={{ backgroundColor: 'primary.light' }}>{appointmentData.specialty}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ backgroundColor: 'primary.main', color: 'white', fontWeight: 'bold' }}>Location</TableCell>
                <TableCell sx={{ backgroundColor: 'primary.light' }}>{appointmentData.location}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ backgroundColor: 'primary.main', color: 'white', fontWeight: 'bold' }}>Address</TableCell>
                <TableCell sx={{ backgroundColor: 'primary.light' }}>{appointmentData.address}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ backgroundColor: 'primary.main', color: 'white', fontWeight: 'bold' }}>Patient</TableCell>
                <TableCell sx={{ backgroundColor: 'primary.light' }}>{appointmentData.patientName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ backgroundColor: 'primary.main', color: 'white', fontWeight: 'bold' }}>Email</TableCell>
                <TableCell sx={{ backgroundColor: 'primary.light' }}>{appointmentData.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ backgroundColor: 'primary.main', color: 'white', fontWeight: 'bold' }}>Date</TableCell>
                <TableCell sx={{ backgroundColor: 'primary.light' }}>{appointmentData.date}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ backgroundColor: 'primary.main', color: 'white', fontWeight: 'bold' }}>Time</TableCell>
                <TableCell sx={{ backgroundColor: 'primary.light' }}>{`${appointmentData.startTime} - ${appointmentData.endTime}`}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>


                <Button className='confirm' onClick={handleConfirm}
                                  variant="contained"
                                  color="primary"                
                                  sx={{
                                    textAlign: "center",
                                    color: 'white',
                                    fontSize: { xs: '0.875rem', md: '1rem' },
                                    padding: { xs: '0.4rem', md: '0.75rem 1.2rem' },
                                    margin: "auto"
                                  }}                
                >Confirm</Button>
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




