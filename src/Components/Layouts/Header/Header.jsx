

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../Constants/routes';
import { Button } from '@mui/material';

/**
 * 
 * @returns {ReactComponent} Navbar component, logo and buttons for register and log in
 */ 

export const Header =()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" >
          {/* <img src="/images/ico-logo-fullcolor.png" alt="Application Logo" /> */}
            LOGO
          </Link>
        </Typography>


            <Link to={ROUTES.ADDUSER} >
              <Button 
                variant="contained" 
                color="secondary" 
                margin="10px"
                >
                Create Account
              </Button>
            </Link>
          

            <Link to={ROUTES.PANELUSER} >
              <Button 
                variant="contained" 
                color="secondary" 
                margin="10px">
                Log in
              </Button>
            </Link>
    
        </Toolbar>
      </AppBar>
    </Box>
  );  
}
