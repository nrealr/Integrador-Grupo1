import { useState } from 'react'; // Importamos el hook useState para manejar el estado del componente
import { Button, Container, Typography } from '@mui/material'; // Importamos componentes de Material-UI
import { ModalComponent } from '../../Components/ModalComponent'; // Importamos el componente ModalComponent
import { BookingStepper } from '../../Components'; // Importamos el componente BookingStepper
import { Link, useLocation } from 'react-router-dom';
import { useDoctorStates } from '../../Context';
import queryString from 'query-string';
import './AppointmentSummary.styles.css';
import { ROUTES } from '../../Constants';


export const AppointmentSummary = () => {

    const location = useLocation();
    const doctorDetails = queryString.parse(location.search);
    const selectedDate = doctorDetails.selectedDate;
    const { currentUser } = useDoctorStates();

    // Estado para manejar la apertura del modal
    const [isOpen, setIsOpen] = useState(false);

    // Estado para manejar el mensaje de éxito o error
    const [message, setMessage] = useState('');

    // Estado para manejar si hubo un error o no
    const [error, setError] = useState(false);

    // Función para manejar la confirmación de la reserva
    const handleConfirm = () => {
        // Mockeamos la respuesta de la API
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


    // // Llamada a la API para realizar la reserva

    // axios.post('/api/book-appointment')
    // .then(response => {
    //     const data = response.data;
    //     // Si la reserva fue exitosa, mostramos un mensaje de éxito
    //     if (data.success) {
    //         setMessage('Appointment booked successfully!');
    //         setError(false);
    //     } else {
    //         // Si hubo un error, mostramos un mensaje de error
    //         setMessage('Error booking appointment: ', data.error);
    //         setError(true);
    //     }
    //     // Abrimos el modal para mostrar el mensaje
    //     setIsOpen(true);
    // })
    // .catch(error => {
    //     // Si hubo un error en la llamada a la API, mostramos un mensaje de error
    //     setMessage('Error booking appointment: ', error.message);
    //     setError(true);
    //     // Abrimos el modal para mostrar el mensaje
    //     setIsOpen(true);
    // });


    // Función para manejar el cierre del modal
    const handleClose = () => {
        // Cerramos el modal
        setIsOpen(false);
        // Si no hubo un error, redirigimos a otra página
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
            {/* Título de la página */}
            <Typography variant="h3" sx={{ color: 'white', backgroundColor: 'primary.light', padding: '2.5rem 1rem 1.5rem' }}>
                Appointment Booking
            </Typography>
            {/* Componente BookingStepper con activeStep seteado a 2 */}
            <BookingStepper activeStep={2} />
            <Container>
                {/* Información de la reserva */}
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
                    <p>Date: {selectedDate}</p>
                    <p>Specific Hour</p>
                </div>
                {/* Botón para confirmar la reserva */}
                <Button className='confirm' onClick={handleConfirm}>Confirm</Button>
                {/* Componente ModalComponent que se abre cuando se confirma la reserva */}
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