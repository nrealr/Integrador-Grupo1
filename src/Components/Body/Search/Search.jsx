import React from 'react';
import "./Search.styles.css";

/**
 * 
 * @returns {React.Component} section box with dropdown and search button
 */

export const Search = () => {

  return (



    <div className="search-container">
      <h2>WE HANDLE YOUR MEDICAL BOOKINGS</h2>
      <h1>EASY BOOKING, SAFE CARE!</h1>

      <div className="dropdown">
        <select>
          <option>Enter Speciality</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <div className="dropdown">
        <select>
          <option>Select City</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      
      <div className="search-button">
        <button>Search</button>
      </div>
    </div>
  );
};

export default Search;