import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const { query } = location.state || {};

  return (
    <div>
      <h1>Search Results</h1>
      {query ? (
        <p>Showing results for: {query}</p>
      ) : (
        <p>No search query provided.</p>
      )}
      {/* Render your search results here */}
    </div>
  );
};

export default SearchResults;