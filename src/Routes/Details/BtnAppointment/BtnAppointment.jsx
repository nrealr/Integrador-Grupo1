import React from "react";
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import { ROUTES } from "../../../Constants";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


/**
 * 
 * @returns {React.Component} Deploy a button for make an appointment, will carry you to appointments route
 */
export const BtnAppointment = () => {

    return (
        <Button
            variant="contained"
            component={Link}
            to={ROUTES.APPOINTMENTS}
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
                backgroundColor: '#63c0bb', // azul
                color: 'black', // blanco
                fontSize: '16px',
                '&:hover': {
                    backgroundColor: 'white', // verde claro

                },
            }}
        >
            Book an Appointment
        </Button>)
}
