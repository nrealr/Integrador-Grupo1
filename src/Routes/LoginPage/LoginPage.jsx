import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from "../../Components/Layouts/Header/LoginForm/LoginForm";
import { useDoctorStates } from "../../Context/Context";
import { ROUTES } from "../../Constants";

const LoginPage = () => {
  const { state } = useDoctorStates();
  const navigate = useNavigate();
  const location = useLocation();
  const fromReservation = location.state?.fromReservation || false;

  useEffect(() => {
    if (state.isLoggedIn) {
      alert("You are already logged in");
      navigate(fromReservation ? ROUTES.APPOINTMENTS : ROUTES.PROFILE);
    }
    console.log(location.state);
  }, [state.isLoggedIn, navigate, fromReservation]);

  const handleLoginSuccess = () => {
    navigate(fromReservation ? ROUTES.APPOINTMENTS : ROUTES.PROFILE);
  };

  if (state.isLoggedIn) {
    return null; // Return null to prevent rendering the login form if already logged in
  }

  return (
    <div>
      {fromReservation && <p>Please log in to continue.</p>}
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
