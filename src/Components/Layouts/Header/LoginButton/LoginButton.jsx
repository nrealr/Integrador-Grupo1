

import React, { useState } from 'react';
import { Button, ClickAwayListener, Grow, Paper, Popper, TextField } from '@mui/material';
import axios from 'axios';

export const LoginButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(!/^\S+@\S+\.\S+$/.test(event.target.value));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(event.target.value.length < 4);
  };

  const handleLogin = async (event) => {

    const token = localStorage.getItem("token");
    let params = null;
    if (token) {
        params = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    }

    event.preventDefault();
    if (emailError || passwordError) {
      return;
    }
      try {
      const response = await axios.post('http://localhost:8081/users/login', { email, password });
      debugger
      const token = response.data.token;
      debugger
      localStorage.setItem('token', token);

      window.location.href = '/profile';
    }   catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleCreateAccount = () => {
    window.location.href = '/register';
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Login
      </Button>
      <Popper 
        open={Boolean(anchorEl)} 
        anchorEl={anchorEl} 
        transition>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <form onSubmit={handleLogin}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={handleEmailChange}
                    error={emailError}
                    helperText={emailError && 'Invalid email'}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    error={passwordError}
                    helperText={passwordError && 'Invalid password'}
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Sign In
                  </Button>
                  <Button variant="text" color="secondary" onClick={handleCreateAccount}>
                    Don't you have an account yet? Do it here!
                  </Button>
                </form>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
