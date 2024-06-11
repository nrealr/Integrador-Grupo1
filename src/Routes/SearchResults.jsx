import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
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
        {results.map((doctor) => (
            <Detail id={doctor.id} />
        ))}
    </div>
  );
}

export default SearchResults;

