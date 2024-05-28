import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../Constants';
import axios from 'axios';
import './LoginButton.styles.css'


export const LoginButton = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (event.target.id === 'button-id') {
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
    setPasswordError(event.target.value.length < 8);
  };

  const handleLogin = async () => {
    if (emailError || passwordError) {
      return;
    }
    try {
      const response = await axios.post('https://your-api-url.com/auth', { email, password }, { withCredentials: true });
      if (response.data.success) {
        // Redirigir al usuario a la página de perfil
      } else {
        // Mostrar mensaje de error
      }
    } catch (err) {
      // Mostrar mensaje de error
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color='secondary'
        id="button-id"
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleToggle}
        sx={{
          color: 'white'
        }}
      >
        Log In
      </Button>
      
      <Popper
        open={open}
        anchorEl={document.getElementById('button-id')}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
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
                    helperText={emailError && 'Invalid e-mail'}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    error={passwordError}
                    helperText={passwordError && 'The password must have at least 8 characters'}
                  />
                  <MenuItem onClick={handleLogin} component={Link} to={ROUTES.PROFILE}>Sign In</MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to={ROUTES.ADDUSER}>
                    ¿Don't you have an account? Create one!
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