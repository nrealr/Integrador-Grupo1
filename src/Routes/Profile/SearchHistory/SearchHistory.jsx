import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../Constants';
import { StyledTable, StyledTableCell, StyledTableHead, StyledTableRow, StyledTitle } from './SearcHistory.styled'
import { Box, Typography, TableBody } from '@mui/material';
import { getUserPreferences } from '../../../Services/Users';

export const SearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchHistory = async () => {
      try {
        const preferences = await getUserPreferences();
        const transformedSearchHistory = preferences.searchHistory.map((searchTerm) => {
          const [query, location] = searchTerm.split(' - ');
          return {
            query: query || '',
            location: location || '',
          };
        });

        setSearchHistory(transformedSearchHistory || []);
      } catch (error) {
        console.error("Error fetching user preferences: ", error);
      }
    };

    fetchSearchHistory();
  }, []);

  const handleHistoryClick = (search) => {
    const queryParams = new URLSearchParams({
      query: search.query,
      location: search.location
    }).toString();
    navigate(`${ROUTES.SEARCHRESULTS}?${queryParams}`);
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
                    🔍 {search.query || ''}
                  </Link>
                </StyledTableCell>
                <StyledTableCell>{search.location || ''}</StyledTableCell>
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
