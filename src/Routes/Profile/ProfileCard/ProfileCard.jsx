import React, { useState } from 'react';
import axios from 'axios';


import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  MenuItem,
  Input,
} from '@mui/material';
import { SERVER_API } from '../../../Constants';

export const ProfileCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    medicalCenter: '',
    profilePhoto: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handlePhotoChange = (event) => {
    setFormData((prevData) => ({ ...prevData, profilePhoto: event.target.files[0] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    axios.post(SERVER_API, formDataToSend)
      .then(res=> console.log(res))
      .catch(err =>console.log(err))
  };

  return (
    <Card>
      <CardContent color="primary">
        <Typography variant="h5" component="h2">
          Complete your personal information
        </Typography>

        <form id="form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Select your preferred medical center or telemedicine"
            name="medicalCenter"
            value={formData.medicalCenter}
            onChange={handleChange}
            margin="normal"
            fullWidth
            select
          >
            <MenuItem value="option1">Southern area</MenuItem>
            <MenuItem value="option2">Metropolitan region</MenuItem>
            <MenuItem value="option3">Northern area</MenuItem>
            <MenuItem value="option4">Telemedicine</MenuItem>
          </TextField>
          <Input
            type="file"
            name="profile-photo"
            accept="image/*"
            id="profile-photo"
            onChange={handlePhotoChange}
          />
          <label htmlFor="profile-photo">Select photo:</label>
        </form>
      </CardContent>

      <CardActions>
        <Button type="submit" variant="contained" color="primary" form="form">
          Save Changes
        </Button>
      </CardActions>
    </Card>
  );
};