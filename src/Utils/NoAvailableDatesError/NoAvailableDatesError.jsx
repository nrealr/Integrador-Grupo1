import React from 'react';
import { Typography, Box, Alert } from '@mui/material';

export const NoAvailableDatesError = () => {
    return (
        <Box sx={{ py: 2, px: 4, mb: 2, borderRadius: 1, backgroundColor: '#fff' }}>
            <Alert severity="error" sx={{ mb: 0 }}>
                <Typography variant="body1" color="error">
                    The date is not available
                </Typography>
            </Alert>
        </Box>
    );
};


/**
 * Example usage: import React, { useState, useEffect } from 'react';

import NoAvailableDatesError from '../utils/NoAvailableDatesError';

const Calendar = () => {
  const [availableDates, setAvailableDates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAvailableDates()
      .then(response => {
        setAvailableDates(response.data);
      })
      .catch(error => {
        setError('No available dates');
      });
  }, []);

  if (error) {
    return <NoAvailableDatesError />;
  }

  return (
    <table className="calendar">
      /* calendar cells */
//     </table >
// );
// };
