

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../Constants';
import { StyledTable, StyledTableCell, StyledTableHead, StyledTableRow, StyledTitle } from './SearcHistory.styled'
import { Box, Typography, TableBody } from '@mui/material';

export const SearchHistory = () => {
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
      <StyledTitle variant="h6">
        Search History
      </StyledTitle>
      {searchHistory.length > 0 ? (
        <StyledTable>
          <StyledTableHead>
            <StyledTableRow>
              <StyledTableCell>Search</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>Doctor</StyledTableCell>
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
            {searchHistory.map((search, index) => (
              <StyledTableRow key={index} onClick={() => handleHistoryClick(search)}>
                <StyledTableCell>
                  <Link
                    component="button"
                    variant="body1"
                    sx={{ cursor: 'pointer', textDecoration: 'none', color: 'blue' }}
                  >
                    🔍 {search.query || '-'}
                  </Link>
                </StyledTableCell>
                <StyledTableCell>{search.location || '-'}</StyledTableCell>
                <StyledTableCell>
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
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      ) : (
        <Typography variant="body1">
          No recent searches.
        </Typography>
      )}
    </Box>
  );
};

