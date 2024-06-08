import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { getDoctors } from '../../Services';


export const SearchBar = ({searchResult}) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); 

      if (active) {
        try {
          const doctors = await getDoctors();
          setOptions(doctors);
        } catch (error) {
          console.error('Error fetching doctors:', error);
        }
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300, backgroundColor: 'white', color: 'black' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      isOptionEqualToValue={(option, value) => option.rut === value.rut}
      getOptionLabel={(option) => `${option.name} ${option.lastname}`}
      options={options}
      filterOptions={(options, { inputValue }) =>
        options.filter((option) =>
          (`${option.name} ${option.lastname} ${option.rut}`).toLowerCase().includes(inputValue.toLowerCase())
        )
      }
      loading={loading}
      onChange={(event, value) => {
        if (value) {
          searchResult(value); // Call the callback with the selected option
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Here"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}