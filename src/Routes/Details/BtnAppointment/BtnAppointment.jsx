import React from "react";
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Constants";

export const BtnAppointment = ({ selectedDate, selectedTimeSlot }) => {
  // Construye la URL con los parámetros seleccionados
const url = selectedTimeSlot ? 
  `${ROUTES.APPOINTMENTSUMMARY}?selectedDate=${selectedDate}&selectedTimeSlot=${selectedTimeSlot.startTime}-${selectedTimeSlot.endTime}` : 
  `${ROUTES.APPOINTMENTSUMMARY}`;


  return (
    <Button
      variant="contained"
      component={Link}
      to={url}
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
    </Button>
  );
};

