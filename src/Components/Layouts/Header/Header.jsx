import { useState, useEffect } from "react";
import "./Header.styles.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Constants";
import { AppBar, Toolbar, useTheme, Box, Button } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { LoginButton } from "./LoginButton";
import { BackgroundLetterAvatars } from "../../../Routes/Profile/BackgroundLetterAvatars/BackgroundLetterAvatars";

/**
 *
 * @returns {ReactComponent} Header component, logo and buttons for create account and log in
 */

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const darkModeClass = isDarkMode ? "layout-dark" : "layout";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <AppBar position="fixed" color="background1">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Link to="/" className="logo-header">
            <Box
              component="img"
              src="/images/ico-logo-fullcolor.png"
              alt="Application Logo"
              sx={{
                maxHeight: { xs: 50, sm: 60, md: 65},
                width: "auto",
              }}
            />
          </Link>
        </Box>

        <div className="header-buttons">
          {!isLoggedIn ? (
            <>
              <Link to={ROUTES.ADDUSER}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClickOpen}
                  sx={{
                    color: "white",
                  }}
                >
                  Create Account
                </Button>
              </Link>
              <LoginButton setIsLoggedIn={setIsLoggedIn} />
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
                sx={{
                  color: "white",
                }}
              >
                Log Out
              </Button>
              <Link to={ROUTES.PROFILE}>
                <BackgroundLetterAvatars />
              </Link>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};