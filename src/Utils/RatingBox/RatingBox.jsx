import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import './RatingBox.styles.css';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export const RatingBox = () => {
  const [value, setValue] = React.useState(3.5);

  return (
    <Box className="RatingBox">
      <Rating
        name="text-feedback"
        value={value}
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 10 }} fontSize="inherit" />}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      {/* <Box sx={{ ml: 2 }}>{labels[value]}</Box> */}
    </Box>
  );
};