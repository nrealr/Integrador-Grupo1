import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import { ProfileCard } from './ProfileCard';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Constants';
import './Profile.styles.css'
import { handleLogout } from '../../Utils';


const menuItemStyles = {

  backgroundColor: 'antiquewhite',
  color: 'black',
  underline: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'secondary',
    color: 'black',
    }
}

const MyMenu = () => {

   return (

     <Link className="link" to={ROUTES.PROFILE}>
       <MenuItem component={Link} to={ROUTES.PROFILE} sx={menuItemStyles} >Account</MenuItem>
       <MenuItem component={Link} to={ROUTES.PASSWORD} sx={menuItemStyles} >Password</MenuItem>
       <MenuItem component={Link} to={ROUTES.APPOINTMENTS} sx={menuItemStyles} >My Appointments</MenuItem>
       <MenuItem onClick={handleLogout} sx={menuItemStyles} >Log Out</MenuItem>
     </Link>

    )
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

  return (
    <Stack direction="row" spacing={2}>
      <Paper
        elevation={15} sx={{ backgroundColor: 'antiquewhite' }}>
        <MyMenu />
      </Paper>
      <Paper>
        <Grid>
          <ProfileCard />
        </Grid>
      </Paper>
    </Stack>
  );
}

