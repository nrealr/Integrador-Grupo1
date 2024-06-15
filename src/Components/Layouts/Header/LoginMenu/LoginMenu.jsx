import React, { useState } from "react";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ROUTES } from "../../../../Constants";
import { login } from "../../../../Services/login";
import { MenuList, TextField } from "./LoginMenu.styled";
import { useDoctorStates } from "../../../../Context";

/**
 * 
 * @returns {React.Component} Menu list for LOG IN button, complete with email and password
 */

export const LoginMenu = () => {
  const { dispatch } = useDoctorStates();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    setLoginError("");
  };

  const handleClose = (event) => {
    if (event.target.id === "button-id") {
      return;
    }
    setOpen(false);
    setEmail("");
    setPassword("");
    setLoginError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(!/^\S+@\S+\.\S+$/.test(event.target.value));
    setLoginError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(event.target.value.length < 8);
    setLoginError(""); 
  };

  const handleLogin = async () => {
    if (emailError || passwordError) {
      return;
    }
    try {
      const response = await login({ email, password });
      console.log(response);
      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("id", response.id);
        dispatch({ type: 'LOGIN' });
        window.location.href = "/profile";
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
    <div>
      <Button
        variant="contained"
        color="secondary"
        id="button-id"
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleToggle}
        sx={{ color: "white" }}
      >
        Log In
      </Button>
      <Popper
        open={open}
        anchorEl={document.getElementById("button-id")}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
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
                      "The password must have at least 8 characters"
                    }
                  />
                  {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
                  <MenuItem onClick={handleLogin}>Sign In</MenuItem>
                  <MenuItem component={Link} to={ROUTES.ADDUSER}>
                    Don't have an account? Create one!
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};