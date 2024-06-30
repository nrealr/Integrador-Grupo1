import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LoginForm } from "../../Components/Layouts/Header/LoginForm/LoginForm";
import { useDoctorStates } from "../../Context/Context";
import { ROUTES } from "../../Constants";
import { Typography, Box } from "@mui/material";

export const LoginPage = () => {
  const { state } = useDoctorStates();
  const navigate = useNavigate();
  const location = useLocation();
  const fromReservation = location.state?.fromReservation || false;
  const queryString = location.state?.queryString || false;

  useEffect(() => {
    if (state.isLoggedIn) {
      alert("You are already logged in");
      navigate(fromReservation ? (queryString ? `${ROUTES.APPOINTMENTSUMMARY}?${queryString}` : ROUTES.PROFILE) : ROUTES.PROFILE);
    }
    console.log(location.state);
  }, [state.isLoggedIn, navigate, fromReservation]);

  const handleLoginSuccess = () => {
    navigate(fromReservation ? (queryString ? `${ROUTES.APPOINTMENTSUMMARY}?${queryString}` : ROUTES.PROFILE) : ROUTES.PROFILE);
  };

  if (state.isLoggedIn) {
    return null; // Return null to prevent rendering the login form if already logged in
  }

  return (
    <>
      {fromReservation && 
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: '100%',
          zIndex: 1
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "white",
            textDecoration: "underline",
          }}
        >
          Please log in to continue.
        </Typography>
      </Box>
      }
      <Box
        sx={{
          mt: fromReservation ? 10 : 0, // Ajusta este valor según sea necesario
        }}
      >
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </Box>
    </>
  );
};
