import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./BackgroundLetterAvatars.styles.css";

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
  const name = localStorage.getItem("name") || "User";
  const lastname = localStorage.getItem("lastname") || "Name";

  return (
    <Stack direction="row" spacing={2}>
      <Avatar className="no-gutters" {...stringAvatar(name, lastname)} />
    </Stack>
  );
};
