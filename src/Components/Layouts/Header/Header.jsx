import { useState } from "react";
import "./Header.styles.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Constants";
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Toolbar,
  useTheme,
} from "@mui/material";
import { RegisterForm } from "../../../Routes/RegisterForm";

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
          <Link to={ROUTES.ADDUSER} >
          <button variant="contained" color="primary" onClick={handleClickOpen}>
            Create Account
          </button>
          </Link>
         
          <Link to={ROUTES.ADMIN}>
            {" "}
            <button variant="contained" color="secondary">
              Log in
            </button>{" "}
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
