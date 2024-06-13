import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../Constants';

const SearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(storedSearches);
  }, []);

  const handleHistoryClick = (search) => {
    if (search.doctorId) {
      navigate(`/doctors/${search.doctorId}`);
    } else {
      const queryParams = new URLSearchParams({
        query: search.query,
        location: search.location
      }).toString();
      navigate(`${ROUTES.SEARCHRESULTS}?${queryParams}`);
    }
  };

  return (
    <Box sx={{ padding: '1rem' }}>
      <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
        Search History
      </Typography>
      {searchHistory.length > 0 ? (
        <Table>
          <TableHead sx={{ backgroundColor: 'lightblue' }}>
            <TableRow>
              <TableCell>Search</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Doctor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchHistory.map((search, index) => (
              <TableRow key={index} onClick={() => handleHistoryClick(search)} sx={{

                cursor: "pointer",
            
                "&:hover": {
            
                  backgroundColor: "#f0f0f0" // Cambia el background color al hacer hover
            
                }
            
              }}>
                <TableCell>
                  <Link 
                    component="button" 
                    variant="body1" 
                    sx={{ cursor: 'pointer', textDecoration: 'none', color: 'blue' }}
                  >
                    🔍 {search.query || '-'}
                  </Link>
                </TableCell>
                <TableCell>{search.location || '-'}</TableCell>
                <TableCell>
                  {search.doctorId ? (
                    <Link 
                      component="button" 
                      variant="body1" 
                      onClick={() => handleHistoryClick(search)}
                      sx={{ cursor: 'pointer', textDecoration: 'none', color: 'blue' }}
                    >
                      {search.doctorName}
                    </Link>
                  ) : (
                    '-'
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography variant="body1">
          No recent searches.
        </Typography>
      )}
    </Box>
  );
};

export default SearchHistory;
