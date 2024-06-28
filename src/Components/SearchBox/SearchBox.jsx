import { FormControl, Button, InputLabel, Select, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { getLocations } from '../../Services/Locations/getLocations';

import CircularProgress from '@mui/material/CircularProgress';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { getSearchingData } from '../../Services';

export const SearchBox = ({
    onSearch
}) => {

    const [locationId, setLocationId] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [locationList, setLocationList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [autocompleteOptions, setAutocompleteOptions] = useState([]);

    const onLocationChange = (event) => {
        setLocationId(event.target.value);
    };

    const onInputChange = (_, value) => {
        setInputValue(value);
    };

    const onSearchClick = () => {
        const selectedLocation = locationList.find((location) => {
            return location.id === locationId;
        });

        onSearch({
            searchingValue: inputValue,
            location: selectedLocation || {}
        });
    };

    const onKeyPress = (event) => {
        const currentOptions = filterOptions(autocompleteOptions, {
            inputValue
        });
        const isThereData = currentOptions.length > 0;
        if (event.key === 'Enter' && isThereData) {
            onSearchClick();
        }
    }

    const getOptionLabel = (option) => {
        if (typeof option === 'string') return option;
        if (option.type === 'doctor') {
            return `${option.name} ${option.lastname}`;
        } else {
            return `${option.name}`;
        }
    };
    const filterOptions = (options, { inputValue }) => {
        return options.filter((opt) => {
           const {name, description, lastname} = opt;
           const optionCriteria = [
                (name || '').toLowerCase(),
                (lastname || '').toLowerCase(),
                (description || '').toLowerCase(),
           ];
           return optionCriteria.filter((criteria) => {
                return criteria.indexOf(inputValue) >= 0;
           }).length > 0;
        });
    };

    useEffect(() => {
        const currentOptions = filterOptions(autocompleteOptions, {
            inputValue
        });
        const isThereData = currentOptions.length > 0;

        if (!inputValue || isThereData) return; 

        const queryParam = inputValue;
        /**
         * revisar si es ID o Texto, si es texto se debe buscar el texto 
         * en la colección locationList a partir del ID
         * que está almacenado en la variable location
         */
        const locationParam = ''; //location;
        setLoading(true);
        getSearchingData(queryParam, locationParam).then((data) => {
            setAutocompleteOptions(data);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [inputValue])

    useEffect(() => {
        getLocations()
        .then((locationList) => {
            setLocationList(locationList)
        });
    },[]);

    const isSearchButtonDisabled = false;

    return (
        <>
            <FormControl fullWidth sx={{ mb: { xs: '1rem', md: '0' }, flex: 1.6, fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
            <Autocomplete
                id="asynchronous-demo"
                freeSolo
                sx={{ width: { xs: '100%', sm: '100%', md: '100%' }, backgroundColor: 'white', color: 'black' }}
                inputValue={inputValue}
                onInputChange={onInputChange}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                getOptionLabel={getOptionLabel}
                options={autocompleteOptions}
                filterOptions={filterOptions}
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
                        <>
                            {loading && <CircularProgress color="inherit" size={20} /> }
                            {params.InputProps.endAdornment}
                        </>
                        ),
                        type: 'search',
                    }}
                    onKeyPress={onKeyPress}
                    />
                )}
                />
            </FormControl>

            <FormControl fullWidth sx={{ mb: { xs: '1rem', md: '0' }, flex: 1.1, fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                <InputLabel
                    sx={{
                        color: 'grey',
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                    }}
                >
                    Choose Location
                </InputLabel>
                <Select
                    value={locationId}
                    onChange={onLocationChange}
                    sx={{
                        backgroundColor: 'white', color: 'black',
                        '& .MuiSelect-select': {
                            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
                        }
                    }}
                >
                    {locationList.map((location) => (
                        <MenuItem key={location.id} value={location.id}>
                            {location.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Button
                variant="contained"
                color="primary"
                sx={{
                    color: 'white',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    width: { xs: '100%', md: 'auto' },
                    padding: { xs: '0.4rem', md: '0.75rem 1.2rem' },
                    flex: 1,
                }}
                onClick={onSearchClick}
                disabled={isSearchButtonDisabled}
            >
                Search
            </Button>
        </>
    )
};
