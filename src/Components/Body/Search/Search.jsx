import React from 'react';
import "./Search.styles.css"

export const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Buscar productos..." />
      <button>Buscar</button>
    </div>
  );
};

export default Search;