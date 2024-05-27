import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import ProfileCard from './ProfileCard/ProfileCard';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Constants';

export const Profile=()=> {
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
      <Paper>
        <MenuList>
          <Link to={ROUTES.PROFILE}>
          <MenuItem>Account</MenuItem>
          </Link>
          <Link to={ROUTES.PASSWORD}></Link>
          <MenuItem>Password</MenuItem>
          <Link to={ROUTES.APPOINTMENTS}>
          <MenuItem>My appointments</MenuItem>
          </Link>
    
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper>
      <Paper>
        <Grid>
           <ProfileCard/>
        </Grid>
      </Paper>
    </Stack>
  );
}

