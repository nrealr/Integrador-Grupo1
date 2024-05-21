import { useState } from "react";
import "./Header.styles.css"
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Constants";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import {RegisterForm} from "../../../Forms/RegisterForm";

/**
 * 
 * @returns {ReactComponent} Header component, logo and buttons for create account and log in
 */

export const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const darkModeClass = isDarkMode ? "layout-dark" : "layout";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return(

  <header className="header">
    <div className="logo-header">
      <Link to="/"><img src="/images/ico-logo-fullcolor.png" alt="Application Logo" /></Link>
    </div>
    
    <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/specialities">Specialities</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    </nav>
   
      <div className="header-buttons">
          <button variant="contained" color="primary" onClick={handleClickOpen}>Create Account</button>
          <Link to={ROUTES.ADMIN}>{" "}
            <button variant="contained" color="secondary">Log in</button>{" "}
          </Link>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registro de Usuario</DialogTitle>
        <DialogContent>
          <RegisterForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

      {/* <img className='icon-theme' 
              onClick={()=> dispatch({type: "CHANGUE_MODE"})}
              src="/images/ico-color-theme.png" 
              alt="Changue mode (dark/light)" 
      />  */}

  </header>
  );
};


