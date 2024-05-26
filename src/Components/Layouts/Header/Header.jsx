
import { useState } from "react";
import "./Header.styles.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Constants";
import {
  AppBar,
  Toolbar,
  useTheme,
} from "@mui/material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { LoginButton } from './LoginButton';

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
        <div className="logo-header">
          <Link to="/">
            <img src="/images/ico-logo-fullcolor.png" alt="Application Logo" />
          </Link>
        </div>


        <div className="header-buttons">
          <Link to={ROUTES.ADDUSER} >
          <button variant="contained" color="primary" onClick={handleClickOpen}>
            Create Account
          </button>
          </Link>
         
          <LoginButton/>  

          <Link to={ROUTES.ADMIN}>
          <AdminPanelSettingsIcon/>
        </Link>

        </div>
      </Toolbar>

      {/*<Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <RegisterForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
  </Dialog>*/}

      {/* <img className='icon-theme' 
              onClick={()=> dispatch({type: "CHANGUE_MODE"})}
              src="/images/ico-color-theme.png" 
              alt="Changue mode (dark/light)" 
      />  */}
    </AppBar>
  );
};



