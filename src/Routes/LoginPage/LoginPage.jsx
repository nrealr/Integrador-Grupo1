import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../Components/Layouts/Header/LoginForm/LoginForm";
import { useDoctorStates } from "../../Context/Context";

export const LoginPage = () => {
  const { state } = useDoctorStates();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isLoggedIn) {
      alert("You are already logged in");
      navigate("/profile");
    }
  }, [state.isLoggedIn, navigate]);

  const handleLoginSuccess = () => {
    navigate("/profile");
  };

  if (state.isLoggedIn) {
    return null; // Return null to prevent rendering the login form if already logged in
  }

  return (
    <>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </>
  );;
};