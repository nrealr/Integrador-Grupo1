import React from "react";
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { ROUTES } from "../../../Constants";

export const BtnAppointment = ({ doctorDetails, selectedDate, selectedTimeSlot }) => {
    const navigate = useNavigate();

    const { name, lastname, description, urlImg, specialty, location, locationAddress } = doctorDetails;

    // Convertir selectedTimeSlot a cadena si es necesario
    const stringifiedTimeSlot = JSON.stringify(selectedTimeSlot);

    // Crear el objeto con los detalles del doctor y la cita
    const encodedDetails = {
        name,
        lastname,
        description,
        urlImg,
        specialty,
        location,
        locationAddress,
        selectedDate,
        selectedTimeSlot: stringifiedTimeSlot, // Usar la cadena convertida
    };

    const handleClick = () => {
        // Codificar los detalles usando queryString.stringify
        const encodedQueryString = queryString.stringify(encodedDetails);
        navigate(`${ROUTES.APPOINTMENTSUMMARY}?${encodedQueryString}`);
    };

    return (
        <Button
            variant="contained"
            onClick={handleClick}
            className="btn-appointment"
            endIcon={<CalendarMonthTwoToneIcon />}
            sx={{
                textTransform: 'none',
                padding: '1rem',
                borderRadius: '25px',
                width: 'auto',
                margin: '10%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid white',
                backgroundColor: '#63c0bb',
                color: 'black',
                fontSize: '16px',
                '&:hover': {
                    backgroundColor: 'white',
                },
            }}
        >
            Book an Appointment
        </Button>
    );
};
