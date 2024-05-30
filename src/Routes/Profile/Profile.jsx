import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import { ProfileCard } from './ProfileCard';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Constants';
import './Profile.styles.css';
import { handleLogout } from '../../Utils';

const menuItemStyles = {
  backgroundColor: 'antiquewhite',
  color: 'black',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'secondary',
    color: 'black',
  },
};

const MyMenu = () => {
  const role = localStorage.getItem('role'); // Obtener el rol del usuario desde el localStorage

  return (
    <div>
      <MenuItem component={Link} to={ROUTES.PROFILE} sx={menuItemStyles}>
        Account
      </MenuItem>
      <MenuItem component={Link} to={ROUTES.PASSWORD} sx={menuItemStyles}>
        Password
      </MenuItem>
      <MenuItem component={Link} to={ROUTES.APPOINTMENTS} sx={menuItemStyles}>
        My Appointments
      </MenuItem>
      {role === 'ADMINISTRATOR' && ( // Mostrar solo si el rol es ADMINISTRATOR
        <MenuItem component={Link} to={ROUTES.ADMIN} sx={menuItemStyles}>
          Admin Dashboard
        </MenuItem>
      )}
      <MenuItem onClick={handleLogout} sx={menuItemStyles}>
        Log Out
      </MenuItem>
    </div>
  );
};

export const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const name = localStorage.getItem('name'); // Obtener el nombre del localStorage
  const lastname = localStorage.getItem('lastname'); // Obtener el apellido del localStorage

  return (
    <Stack direction="row" spacing={2}>
      <Paper elevation={15} sx={{ backgroundColor: 'antiquewhite' }}>
        <MyMenu />
      </Paper>
      <Paper>
        <Grid>
          <h2>Welcome, {name} {lastname}!</h2> {/* Renderizar nombre y apellido */}
          <ProfileCard />
        </Grid>
      </Paper>
    </Stack>
  );
};