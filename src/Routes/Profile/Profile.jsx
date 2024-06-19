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
import { getUsersById } from '../../Services/Users/getUsersById';

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
  const [userData, setUserData] = React.useState({});
  
  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUsersById();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    fetchUserData();
  }, []);

  const { role } = userData;

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
      <MenuItem component={Link} to={ROUTES.SEARCHHISTORY} sx={menuItemStyles}>
        Search History
      </MenuItem>
      {role === 'ADMINISTRATOR' && (
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
  const [userData, setUserData] = React.useState({});
  
  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUsersById();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    fetchUserData();
  }, []);

  const { name, lastname } = userData;

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

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2} marginTop={12} >
      <Paper elevation={15} sx={{ backgroundColor: 'antiquewhite' }}>
        <MyMenu />
      </Paper>
      <Paper>
        <Grid>
          <h2>Welcome, {name} {lastname}!</h2>
          <ProfileCard />
        </Grid>
      </Paper>
    </Stack>
  );
};
