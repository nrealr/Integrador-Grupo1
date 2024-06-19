import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/Layouts/Header/LoginForm/LoginForm";
import { useDoctorStates } from "../../Context/Context";
import { Box, Typography, Container, Paper, Avatar } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginPage = () => {
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
    <Box sx={{ width: '100%', height: { xs: '120px', sm: '200px' }, backgroundColor: 'primary.main' }}></Box>
    <Container component="main" maxWidth="lg" sx={{ mt: -8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{ p: 3, borderRadius: 1, width: '100%', maxWidth: '600px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">Sign In</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </Box>
        </Paper>
      </Box>
    </Container>
  </>
  );;
};

export default LoginPage;