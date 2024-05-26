

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../Constants/routes';
import { Button } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { LoginButton } from './LoginButton';
/**
 * 
 * @returns {ReactComponent} Navbar component, logo and buttons for register and log in
 */ 

export const Header =()=> {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          
        {/* Logo image, / */}
          <Typography>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src="/images/ico-logo-fullcolor.png" 
                alt="Application Logo"
                style={{
                  maxWidth: '100px',
                  height: 'auto'
                }} 
                />
            </Link>
          </Typography>


          {/* Button for create account, /register */}
            <Link to={ROUTES.ADDUSER} >
              <Button 
                variant="contained" 
                color="secondary" 
                margin="10px"
                >
                Create Account
              </Button>
            </Link>
          
          {/* Button for log in, /profile */}
            <LoginButton/>            

          {/* Icon for get into admin panel, /admin */}
            <Link to={ROUTES.ADMIN}>
              <AdminPanelSettingsIcon/>
            </Link>
    
        </Toolbar>
      </AppBar>
    </Box>
  );  
}





