import { useState } from "react";
import "./Header.styles.css";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate
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
  const navigate = useNavigate(); // Hook para la redirección

  const darkModeClass = isDarkMode ? "layout-dark" : "layout";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Función de cerrar sesión
  const handleLogout = () => {
    // Aquí puedes agregar la lógica de cerrar sesión, como limpiar el estado del usuario, tokens, etc.
    console.log("Cerrando sesión...");
    // Redirigir al usuario a la página de inicio de sesión
    navigate(ROUTES.LOGIN);
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
                maxHeight: { xs: 40, sm: 50 },
                width: "auto",
              }}
            />
          </Link>
        </Box>

        <div className="header-buttons">
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

          <LoginButton />

          <Link to={ROUTES.ADMIN}>
            <BackgroundLetterAvatars />
          </Link>

          {/* Botón de cerrar sesión */}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogout}
            sx={{
              color: "white",
              marginLeft: 2,
            }}
          >
            Cerrar Sesión
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
