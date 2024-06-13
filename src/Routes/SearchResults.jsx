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
    <div>
      {results.length > 0 ? (
        <div style={{marginTop : 100}}>
          <h2 style={{textAlign: "center"}}>Search results </h2>
          <h3>Results found: {results.length} </h3>
          {results.map((doctor) => (
            <Detail key={doctor.id} id={doctor.id} />
          ))}
        </div>
      ) : (
        <div style={{marginTop: 100, textAlign: "center"}}>
          <h1>No results</h1>
        </div>
      )}
    </div>
  );
}

export default SearchResults;