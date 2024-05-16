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

  <optgroup label="Choose your needed speciality">

    <option>Internal Medicine</option>

    <option>Dermatology</option>

    <option>Obstetrics and Gynecology</option>

    <option>Psychiatry</option>

    <option>Pediatrics</option>

    <option>Cardiology</option>

    <option>Ophthalmology</option>

    <option>Orthopedics</option>

  </optgroup>

</select>

<div class="arrow"></div>

</div>


<div className="dropdown">
  <select>
    <optgroup label="Select Your Consultation City">
      <option>Antofagasta</option>
      <option>Arica</option>
      <option>Calama</option>
      <option>Chillán</option>
      <option>Concepción</option>
      <option>Copiapó</option>
      <option>Iquique</option>
      <option>La Serena</option>
      <option>Puerto Montt</option>
      <option>Santiago</option>
    </optgroup>
  </select>
  <div class="arrow"></div>
</div>
      
      <div className="search-button">
        <button>Search</button>
      </div>
    </div>
  );
};

