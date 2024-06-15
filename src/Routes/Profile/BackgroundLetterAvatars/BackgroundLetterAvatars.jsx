import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./BackgroundLetterAvatars.styles.css";
import { getUsersById } from "../../../Services/Users/getUsersById";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name, lastname) {
  return {
    sx: {
      bgcolor: stringToColor(name + lastname),
    },
    children: `${name[0].toUpperCase()}${lastname[0].toUpperCase()}`,
  };
}

export const BackgroundLetterAvatars = () => {
  const [name, setName] = React.useState("User");
  const [lastname, setLastname] = React.useState("Name");

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUsersById();
        setName(userData.name || "User");
        setLastname(userData.lastname || "Name");
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <Stack direction="row" spacing={2}>
      <Avatar className="no-gutters" {...stringAvatar(name, lastname)} />
    </Stack>
  );
};