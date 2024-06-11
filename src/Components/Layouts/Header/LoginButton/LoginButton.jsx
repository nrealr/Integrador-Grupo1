
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { LoginMenu } from "../LoginMenu";



export const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    localStorage.removeItem("lastname");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <div>
      {isLoggedIn? (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          sx={{ color: "white" }}
        >
          Log Out
        </Button>
      ) : (
        <LoginMenu/>
      )}
    </div>
  );
};