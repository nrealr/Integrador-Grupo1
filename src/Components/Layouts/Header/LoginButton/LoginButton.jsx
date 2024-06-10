// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import Popper from "@mui/material/Popper";
// import Grow from "@mui/material/Grow";
// import Paper from "@mui/material/Paper";
// import ClickAwayListener from "@mui/material/ClickAwayListener";
// import MenuItem from "@mui/material/MenuItem";
// import MenuList from "@mui/material/MenuList";
// import TextField from "@mui/material/TextField";
// import { Link } from "react-router-dom";
// import { ROUTES } from "../../../../Constants";
// import "./LoginButton.styles.css";
// import { login } from "../../../../Services/login";
// import { useLocalStorage } from "../../../../Services/UseLocalStorage";


// export const LoginButton = () => {
//   const [open, setOpen] = useState(false);
//   const [email, setEmail] = useLocalStorage("");
//   const [password, setPassword] = useLocalStorage("");
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);


//   React.useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);

//   }, []);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (event.target.id === "button-id") {
//       return;
//     }
//     setOpen(false);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//     setEmailError(!/^\S+@\S+\.\S+$/.test(event.target.value));

//     // If the email has changed, update the stored email
//     setStoredEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     setPasswordError(event.target.value.length < 4);

//     // If the password has changed, update the stored password
//     setStoredPassword(event.target.value);
//   };

//   const handleLogin = async () => {
//     if (emailError || passwordError) {
//       return;
//     }
//     try {
//       const response = await login({ email, password });
//       localStorage.setItem("token", response.token);
//       localStorage.setItem("role", response.role);
//       localStorage.setItem("name", response.name);
//       localStorage.setItem("lastname", response.lastname);
//       setIsLoggedIn(true);
//       window.location.href = "/profile";
//     } catch (err) {
//       // Mostrar mensaje de error
//       console.error(err);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     localStorage.removeItem("name");
//     localStorage.removeItem("lastname");
//     setIsLoggedIn(false);
//     window.location.href = "/";
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={handleLogout}
//           sx={{ color: "white" }}
//         >
//           Log Out
//         </Button>
//       ) : (
//         <div>
//           <Button
//             variant="contained"
//             color="secondary"
//             id="button-id"
//             aria-controls={open? "menu-list-grow" : undefined}
//             aria-haspopup="true"
//             aria-expanded={open? "true" : undefined}
//             onClick={handleToggle}
//             sx={{ color: "white" }}
//           >
//             Log In
//           </Button>
//           <Popper
//             open={open}
//             anchorEl={document.getElementById("button-id")}
//             role={undefined}
//             transition
//             disablePortal
//           >
//             {({ TransitionProps, placement }) => (
//               <Grow
//                 {...TransitionProps}
//                 style={{
//                   transformOrigin:
//                     placement === "bottom"? "center top" : "center bottom",
//                 }}
//               >
//                 <Paper>
//                   <ClickAwayListener onClickAway={handleClose}>
//                     <MenuList id="menu-list-grow">
//                       <TextField
//                         label="E-mail"
//                         variant="outlined"
//                         fullWidth
//                         value={email}
//                         onChange={handleEmailChange}
//                         error={emailError}
//                         helperText={emailError && "Invalid e-mail"}
//                       />
//                       <TextField
//                         label="Password"
//                         variant="outlined"
//                         fullWidth
//                         type="password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                         error={passwordError}
//                         helperText={
//                           passwordError &&
//                           "The password must have at least 8 characters"
//                         }
//                       />
//                       <MenuItem onClick={handleLogin}>Sign In</MenuItem>
//                       <MenuItem component={Link} to={ROUTES.ADDUSER}>
//                         Don't have an account? Create one!
//                       </MenuItem>
//                     </MenuList>
//                   </ClickAwayListener>
//                 </Paper>
//               </Grow>
//             )}
//           </Popper>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState } from "react";
import Button from "@mui/material/Button";
import { ROUTES } from "../../../../Constants";
import { login } from "../../../../Services/login";
import { useLocalStorage } from "../../../../Services/UseLocalStorage";
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