import React, { useState } from "react";
import { TextField, MenuItem, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../Constants";
import { login } from "../../../../Services/login";
import { MenuList } from "../LoginMenu/LoginMenu.styled";
import { useDoctorStates } from "../../../../Context";

const LoginForm = ({ onLoginSuccess }) => {
  const { dispatch } = useDoctorStates();
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
        localStorage.setItem("token", response.token);
        localStorage.setItem("id", response.id);
        dispatch({ type: 'LOGIN' });
        if (onLoginSuccess) {
          onLoginSuccess();  // Llama a la función de redirección si está definida
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
    <Paper>
      <MenuList>
        <TextField
          label="E-mail"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          onKeyPress={handleKeyPress}
          error={emailError}
          helperText={emailError && "Invalid e-mail"}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
          error={passwordError}
          helperText={
            passwordError &&
            "The password must have at least 6 characters"
          }
        />
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        <MenuItem onClick={handleLogin}>Sign In</MenuItem>
        <MenuItem component={Link} to={ROUTES.ADDUSER}>
          Don't have an account? Create one!
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default LoginForm;