import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../Constants";
import { useDoctorStates } from "../../../../Context";
import { login } from "../../../../Services";

export const LoginForm = ({ onLoginSuccess }) => {
  const { dispatch, setCurrentUser } = useDoctorStates();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(!/^\S+@\S+\.\S+$/.test(event.target.value));
    setLoginError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(event.target.value.length < 6);
    setLoginError("");
  };

  const handleLogin = async () => {
    if (emailError || passwordError) {
      return;
    }
    try {
      const response = await login({ email, password });
      if (response.token) {
        setCurrentUser(response);
        dispatch({ type: 'LOGIN' });
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        setLoginError("Login Error. Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      setLoginError("Login Error. Invalid email or password");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

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
            <Box component="form" sx={{ mt: 2 }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    autoComplete="email"
                    error={!!emailError}
                    helperText={emailError && "Invalid e-mail"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    autoComplete="current-password"
                    error={!!passwordError}
                    helperText={passwordError && "The password must have at least 6 characters"}
                  />
                </Grid>
              </Grid>
              {loginError && <Typography color="error" sx={{ mt: 2 }}>{loginError}</Typography>}
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 2, color: 'white' }}
                onClick={handleLogin}
              >
                Sign In
              </Button>
              <Grid container display="flex" flexDirection="column" justifyContent="flex-end" marginTop={2}>
                <Link to={ROUTES.ADDUSER} variant="body2">
                    Don't have an account? Create one!
                </Link>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};
