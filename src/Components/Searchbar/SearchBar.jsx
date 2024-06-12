import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { searchDoctor } from '../../Services/Doctors/searchDoctor';
import { getSpecialties } from '../../Services/Specialties/getSpecialties';

export const SearchBar = ({ searchResult, inputValue, setInputValue, value, setValue, onEnterPress }) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let active = true;

    const fetchOptions = async () => {
      setLoading(true);
      try {
        const query = inputValue.slice(0, 3);
        const [doctors, specialties] = await Promise.all([
          searchDoctor(query),
          getSpecialties()
        ]);
        console.log(doctors);
        console.log(specialties);

        if (active) {
          const combinedOptions = [
            ...doctors.map(doctor => ({
              ...doctor,
              type: 'doctor'
            })),
            ...specialties.map(specialty => ({
              name: specialty.name,
              id: specialty.id,
              type: 'specialty'
            }))
          ];
          setOptions(combinedOptions);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    if (inputValue.length >= 3) {
      fetchOptions();
    } else {
      setOptions([]);
    }

    return () => {
      active = false;
    };
  }, [inputValue]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      freeSolo
      sx={{ width: { xs: '100%', sm: '100%', md: '100%' }, backgroundColor: 'white', color: 'black' }}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if (newValue) {
          searchResult(newValue); // Call the callback with the selected option
        }
      }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.type === 'doctor' ? `${option.name} ${option.lastname}` : option.name)}
      options={options}
      filterOptions={(options, { inputValue }) =>
        options.filter((option) =>
          (`${option.name} ${option.lastname || ''} ${option.specialtyId || ''} ${option.description || ''} ${option.featureIds || ''}`).toLowerCase().includes(inputValue.toLowerCase())
        )
      }
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Enter Speciality, Doctor Name or Services"
          variant="outlined"
          sx={{ backgroundColor: 'white', color: 'black',
          '& .MuiInputBase-input': {
            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
          },
          '& .MuiInputLabel-root': {
            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
          }
            }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
            type: 'search',
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              onEnterPress();
            }
          }}
        />
      )}
    />
  );
};