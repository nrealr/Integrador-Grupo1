import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { RecommendCard } from '../Components/Body/Recommendations';
import { SERVER_API } from '../Constants';
import axios from 'axios';
import { Detail } from './Details/Detail';
import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = searchParams.get('query') || '';
  const location = searchParams.get('location') || '';


  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${SERVER_API}/doctors/search?query=${query}&location=${location}`);
        setResults(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (query || location) {
      fetchResults();
    }
  }, [query, location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box sx={{ marginTop: 10 }}>
    {results.length > 0 ? (
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ color: 'white', backgroundColor: 'primary.light', padding: '16px' }}>
          Appointment Booking
        </Typography>
        <Typography variant="h5" sx={{ color: 'white', backgroundColor: 'primary.light', padding: '8px' }}>
          Results found: {results.length}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0, padding: '0px', marginTop: -3, marginBottom: 3 }}>
          {results.map((doctor) => (
            <Detail key={doctor.id} id={doctor.id} />
          ))}
        </Box>
      </Box>
    ) : (
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h1">No results</Typography>
      </Box>
    )}
  </Box>
  );
}

export default SearchResults;