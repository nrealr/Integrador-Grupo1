import React, { useState } from 'react';
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
import { Profile } from '../Profile';
import { Label } from '@mui/icons-material';

const ProfileCard = () => {
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

  const handleMedicalCenterChange = (event) => {
    setFormData((prevData) => ({ ...prevData, medicalCenter: event.target.value }));
  };

  const handlePhotoChange = (event) => {
    setFormData((prevData) => ({ ...prevData, profilePhoto: event.target.files[0] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or update state to save changes
    console.log('Changes saved!', formData);
  };

  return (
    <Card>
      <CardContent>
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

          <span>Upload your profile picture</span>
          <Label htmlFor="profile-photo">Select photo: </Label>
          <Input
            type="file"
            name="profile-photo"
            accept="image/*"
            id="profile-photo"
            onChange={handlePhotoChange}
          />

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

export default ProfileCard;