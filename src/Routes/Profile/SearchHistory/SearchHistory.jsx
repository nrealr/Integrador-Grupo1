import React, { useEffect, useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
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
    const queryParams = new URLSearchParams({
      query: search.query,
      location: search.location
    }).toString();
    navigate(`${ROUTES.SEARCHRESULTS}?${queryParams}`);
  };

  return (
    <Box sx={{ padding: '1rem' }}>
      <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
        Search History
      </Typography>
      {searchHistory.length > 0 ? (
        <ul>
          {searchHistory.map((search, index) => (
            <li key={index}>
              <Link 
                component="button" 
                variant="body1" 
                onClick={() => handleHistoryClick(search)}
                sx={{ cursor: 'pointer', textDecoration: 'none', color: 'blue' }}
                
              >
                Query: {search.query}, Location: {search.location}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Typography variant="body1">
          No recent searches.
        </Typography>
      )}
    </Box>
  );
};

export default SearchHistory;
