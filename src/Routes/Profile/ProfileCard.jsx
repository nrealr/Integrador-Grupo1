import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, TextField, Button, MenuItem } from '@mui/material';

const ProfileCard = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [medicalCenter, setMedicalCenter] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMedicalCenterChange = (event) => {

    setMedicalCenter(event.target.value);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or update state to save changes
    console.log('Changes saved!');
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Complete your personal information
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={handleNameChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Email"
            value={email}
            onChange={handleEmailChange}
            margin="normal"
            fullWidth
          />
           <TextField

            label="Select your preferred medical center or telemedicine"
            value={medicalCenter}
            onChange={handleMedicalCenterChange}
            margin="normal"
            fullWidth
            select
            >

                <MenuItem value="option1">Southern area</MenuItem>
                <MenuItem value="option2">Metropolitan region</MenuItem>
                <MenuItem value="option3">Northern area</MenuItem>
                <MenuItem value="option4">Telemedicine</MenuItem>

            </TextField>

        </form>
      </CardContent>
      <CardActions>
        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;