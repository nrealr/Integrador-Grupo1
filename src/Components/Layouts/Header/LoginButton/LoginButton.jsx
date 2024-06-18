import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useDoctorStates } from "../../../../Context";
import LoginForm from "../LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
  const { state } = useDoctorStates();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (event.target.id === "button-id") {
      return;
    }
    setOpen(false);
  };

  const handleLoginSuccess = () => {
    setOpen(false);
    navigate("/profile");
  };

  return (
    <div>
      {!state.isLoggedIn && (
        <>
          <Button
            variant="contained"
            color="secondary"
            id="button-id"
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleToggle}
            sx={{ color: "white" }}
          >
            Log In
          </Button>
          <Popper
            open={open}
            anchorEl={document.getElementById("button-id")}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <LoginForm onLoginSuccess={handleLoginSuccess} />
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </>
      )}
    </div>
  );
};
