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
                padding: '6px auto',
                borderRadius: '25px',
                opacity: 0.9,
                width: 'auto',
                margin: '10%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid white'
            }}
        >
            Book an Appointment
        </Button>)
}
