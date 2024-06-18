import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from "../../Components/Layouts/Header/LoginForm/LoginForm";
import { useDoctorStates } from "../../Context/Context";

const LoginPage = () => {
  const { state } = useDoctorStates();
  const navigate = useNavigate();
  const location = useLocation();
  const fromReservation = location.state?.fromReservation || false;

  useEffect(() => {
    if (state.isLoggedIn) {
      alert("You are already logged in");
      navigate("/profile");
    }
    console.log(location.state);
  }, [state.isLoggedIn, navigate]);

  const handleLoginSuccess = () => {
    navigate("/profile");
  };

  if (state.isLoggedIn) {
    return null; // Return null to prevent rendering the login form if already logged in
  }

  return (
    <div>
      {fromReservation && <p>You must be logged in</p>}
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
