import React from 'react';
import "./Search.styles.css";

export const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Find your taylor made doctor..." />
      <button>Search</button>
    </div>
  );
};

export default Search;