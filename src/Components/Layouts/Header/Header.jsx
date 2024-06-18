import { useState, useEffect } from "react";
import "./Header.styles.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Constants";
import { AppBar, Toolbar, useTheme, Box, Button } from "@mui/material";
import { LoginButton } from "./LoginButton";
import { BackgroundLetterAvatars } from "../../../Routes/Profile/BackgroundLetterAvatars/BackgroundLetterAvatars";
import { useDoctorStates } from "../../../Context";

/**
 *
 * @returns {ReactComponent} Header component, logo and buttons for create account and log in
 */

export const Header = () => {
  const { state, dispatch } = useDoctorStates();
  const theme = useTheme();

  const darkModeClass = state.isDarkMode ? "layout-dark" : "layout";

  const handleLogoutClick = () => {
    dispatch({ type: 'LOGOUT' });
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
          {!state.isLoggedIn ? (
            <>
              <Link to={ROUTES.ADDUSER}>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    color: "white",
                  }}
                >
                  Create Account
                </Button>
              </Link>
              <LoginButton />
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogoutClick}
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
