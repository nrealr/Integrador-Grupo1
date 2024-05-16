import React, { useState } from 'react';
import "./Search.styles.css";
import { Dropdown } from '../../../Utils';



/**
 * 
 * @returns {React.Component} section box with dropdown and search button
 */

export const Search = () => {

  const [city, setCity] = useState('');
  const cityOptions = [

    { label: 'Antofagasta', value: 'antofagasta' },
    { label: 'Arica', value: 'arica' },
    { label: 'Calama', value: 'calama' },
    { label: 'Chillán', value: 'chillan' },
    { label: 'Concepción', value: 'concepcion' },
    { label: 'Copiapó', value: 'copiapo' },
    { label: 'Iquique', value: 'iquique' },
    { label: 'La Serena', value: 'la-serena' },
    { label: 'Puerto Montt', value: 'puerto-montt' },
    { label: 'Santiago', value: 'santiago' },
  ];

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const [specialty, setSpecialty] = useState('');
  const specialtyOptions = [
    { value: 'Internal Medicine', label: 'internal-medicine' },
    { value: 'Dermatology', label: 'dermatology' },
    { value: 'Obstetrics and Gynecology', label: 'obstetrics-and-gynecology' },
    { value: 'Psychiatry', label: 'psychiatry' },
    { value: 'Pediatrics', label: 'pediatrics' },
    { value: 'Cardiology', label: 'cardiology' },
    { value: 'Ophthalmology', label: 'ophthalmology' },
    { value: 'Orthopedics', label: 'orthopedics' },
  ];

  const handleSpecialtyChange = (event) => {
    setSpecialty(event.target.value)
  };

  return (
   
    <div className="search-container">
      <span>
        <h3>WE HANDLE YOUR MEDICAL BOOKINGS</h3>
        <h1>EASY BOOKING, SAFE CARE!</h1>
      </span>

    <span className='dropdown-bar'>
      <div>
          <Dropdown
            label="Select a city"
            options={cityOptions}
            value={city}
            onChange={handleCityChange}
            defaultOptionText="Select a city for your appointment"
          />
      </div>

      <div>
          <Dropdown
          label="Select a specialty"
            options={specialtyOptions}
            value={specialty}
            onChange={handleSpecialtyChange}
            defaultOptionText="Select a medical specialty"
          />
      </div>

    </span>
    
      <div className="search-button">
        <button>Search</button>
      </div>
    </div>
  )

}

