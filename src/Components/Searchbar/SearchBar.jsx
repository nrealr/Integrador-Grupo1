import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { searchDoctor } from '../../Services/Doctors/searchDoctor';

export const SearchBar = ({ searchResult, inputValue, setInputValue, value, setValue }) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

      if (active) {
        try {
          // Obtener los primeros 3 caracteres del inputValue
          const query = inputValue.slice(0, 3);
          const doctors = await searchDoctor(query);
          setOptions(doctors);
        } catch (error) {
          console.error('Error fetching doctors:', error);
        }
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, inputValue]); // Agrega inputValue como dependencia

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
      getOptionLabel={(option) => (typeof option === 'string' ? option : `${option.name} ${option.lastname}`)}
      options={options}
      filterOptions={(options, { inputValue }) =>
        options.filter((option) =>
          (`${option.name} ${option.lastname} ${option.specialtyId} ${option.description} ${option.featureIds}`).toLowerCase().includes(inputValue.toLowerCase())
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
        />
      )}
    />
  );
};