import React, { useState } from "react";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ROUTES } from "../../../../Constants";
import { login } from "../../../../Services/login";

export const LoginMenu = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) =>!prevOpen);
  };

  const handleClose = (event) => {
    if (event.target.id === "button-id") {
      return;
    }
    setOpen(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(!/^\S+@\S+\.\S+$/.test(event.target.value));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(event.target.value.length < 4);
  };

  const handleLogin = async () => {
    if (emailError || passwordError) {
      return;
    }
    try {
      const response = await login({ email, password });
      localStorage.setItem("token", response.token);
      localStorage.setItem("role", response.role);
      localStorage.setItem("name", response.name);
      localStorage.setItem("lastname", response.lastname);
      window.location.href = "/profile";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        id="button-id"
        aria-controls={open? "menu-list-grow" : undefined}
        aria-haspopup="true"
        aria-expanded={open? "true" : undefined}
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
                placement === "bottom"? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="menu-list-grow">
                  <TextField
                    label="E-mail"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={handleEmailChange}
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
                    error={passwordError}
                    helperText={
                      passwordError &&
                      "The password must have at least 8 characters"
                    }
                  />
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
