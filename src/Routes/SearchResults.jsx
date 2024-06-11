import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { Box } from '@mui/material';
import { RecommendCard } from '../Components/Body/Recommendations';
import { SERVER_API } from '../Constants';
import axios from 'axios';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${SERVER_API}/doctors/search?query=${query}`);
        setResults(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Box className="flex-container" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {results.map((doctor) => (
          <Box className="flex-item" key={doctor.id} sx={{ flexBasis: '40%', margin: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <RecommendCard doctor={doctor} />
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default SearchResults;

