
import { useState } from "react";
import "./Header.styles.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Constants";
import {
  AppBar,
  Toolbar,
  useTheme,
  Box,
  Button,
} from "@mui/material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { LoginButton } from './LoginButton';
import { BackgroundLetterAvatars } from "../../../Routes/Profile/BackgroundLetterAvatars/BackgroundLetterAvatars";


/**
 *
 * @returns {ReactComponent} Header component, logo and buttons for create account and log in
 */

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const darkModeClass = isDarkMode ? "layout-dark" : "layout";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="fixed" color="background1">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }} >
          <Link to="/" className="logo-header">
            <Box
                component="img"
                src="/images/ico-logo-fullcolor.png"
                alt="Application Logo"
                sx={{
                  maxHeight: { xs: 40, sm: 50 },
                  width: 'auto',
                }}
              />
          </Link>
        </Box>
        
        <div className="header-buttons">
          <Link to={ROUTES.ADDUSER} >
            <Button
              variant="contained"
              color='secondary'
              onClick={handleClickOpen}
              sx={{
                color: 'white'
              }}
            >
              Create Account
            </Button>
          </Link>
         
          <LoginButton/> 
          
        

          <Link to={ROUTES.ADMIN}>
            {/* <AdminPanelSettingsIcon/> */}
            <BackgroundLetterAvatars/>
          </Link>
        </div>

      </Toolbar>

      {/* <img className='icon-theme' 
              onClick={()=> dispatch({type: "CHANGUE_MODE"})}
              src="/images/ico-color-theme.png" 
              alt="Changue mode (dark/light)" 
      />  */}
      {/*<img src="/images/ico-logo-fullcolor.png" alt="Application Logo" className="logo-image"/>*/}
    </AppBar>
  );
};



