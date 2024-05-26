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


export const LoginButton = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Lógica de inicio de sesión
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
                    label="Correo electrónico"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <TextField
                    label="Contraseña"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <MenuItem onClick={handleClose}>
                    <Link to={ROUTES.PROFILE}>
                    <Button variant="contained" color="primary" onClick={handleLogin}>
                      Get in
                    </Button>
                    </Link>
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
