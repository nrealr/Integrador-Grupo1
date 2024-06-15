import React, { useState } from "react";
import Button from "@mui/material/Button";
import { LoginMenu } from "../LoginMenu";
import { handleLogout } from "../../../../Utils";

export const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);


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
