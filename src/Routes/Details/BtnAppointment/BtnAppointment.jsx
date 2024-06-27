import React from "react";
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { ROUTES } from "../../../Constants";

export const BtnAppointment = ({ doctorDetails, selectedDate, selectedTimeSlot }) => {
    const navigate = useNavigate();

    const { id, name, lastname, description, specialty, location, locationAddress } = doctorDetails; // Ensure `id` is the doctorId

    // Convert selectedTimeSlot to string if necessary
    const stringifiedTimeSlot = JSON.stringify(selectedTimeSlot);

    // Create object with doctor and appointment details
    const encodedDetails = {
        doctorId: id, // Ensure doctorId is included
        name,
        lastname,
        description,
        specialty,
        location,
        locationAddress,
        selectedDate,
        selectedTimeSlot: stringifiedTimeSlot,
    };

    const handleClick = () => {
        // Encode details using queryString.stringify
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

