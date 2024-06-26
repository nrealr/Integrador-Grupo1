import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDoctorStates } from "../../../../Context";
import { ROUTES } from "../../../../Constants";

export const LoginButton = () => {
  const { state } = useDoctorStates();

  return (
    <div>
      {!state.isLoggedIn && (
        <Link to={ROUTES.LOGIN} style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ color: "white" }}
          >
            Log In
          </Button>
        </Link>
      )}
    </div>
  );
};
