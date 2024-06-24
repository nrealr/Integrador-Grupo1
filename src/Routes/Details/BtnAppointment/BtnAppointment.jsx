import React from "react";
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import { ROUTES } from "../../../Constants";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import queryString from 'query-string';

export const BtnAppointment = ({ doctorDetails }) => {
    const { name, lastname, description, urlImg, specialty, location, locationAddress } = doctorDetails;
    const encodedDetails = queryString.stringify({ name, lastname, description, urlImg, specialty, location, locationAddress });

    return (
        <Button
            variant="contained"
            component={Link}
            to={`${ROUTES.APPOINTMENTSUMMARY}?${encodedDetails}`}
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
