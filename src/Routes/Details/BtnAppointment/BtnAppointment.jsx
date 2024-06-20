import React from "react";
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import { ROUTES } from "../../../Constants";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDoctorStates } from "../../../Context";

/**
 * 
 * @returns {React.Component} Deploy a button for make an appointment, will carry you to appointments route
 */
export const BtnAppointment = () => {
    const { state } = useDoctorStates();
    const navigate = useNavigate();

    const handleClick = () => {
        if (state.isLoggedIn) {
            navigate(ROUTES.APPOINTMENTS);
        } else {
            navigate(ROUTES.LOGIN, { state: { fromReservation: true } });
        }
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
}
