import React, { useState } from 'react';
import { Autocomplete } from '@mui/material';
import './SearchBar.styles.css'
import { SERVER_API } from '../../Constants';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  const handleSearch = async (searchTerm) => {
    const response = await axios.get(`${SERVER_API}/search`, {
      params: {
        query: searchTerm
      }
    });
  
    const data = response.data;
 
    setSuggestions(data);
  };

  const handleSelect = (event, value) => {
    if (value.type === 'doctor') {
      setSelectedDoctor(value);
    } else if (value.type === 'pecialty') {
      setSelectedSpecialty(value);
    }
  };

  return (
    <Autocomplete
      freeSolo
      id="search-bar"
      onChange={(event, value) => handleSelect(event, value)}
      onInputChange={(event, newInputValue) => {
        setSearchTerm(newInputValue);
        handleSearch(newInputValue);
      }}
      options={suggestions}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar doctor o especialidad"
          />
        </div>
      )}
    />
  );
};
