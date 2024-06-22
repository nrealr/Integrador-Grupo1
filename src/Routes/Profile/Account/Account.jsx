
import React, { useState } from 'react';
import axios from 'axios';
import { AccountContainer, AccountHeader, AccountForm, AccountField, AccountButton } from './Account.styled';
import { Input, MenuItem } from '@mui/material';

export const Account = () => {
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
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <AccountContainer>
      <AccountHeader>
        Welcome, {formData.name}!
      </AccountHeader>

      <AccountForm onSubmit={handleSubmit}>
        <AccountField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <AccountField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <AccountField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <AccountField
          label="Select your preferred medical center or telemedicine"
          name="medicalCenter"
          value={formData.medicalCenter}
          onChange={handleChange}
          select
        >
          <MenuItem value="option1">Southern area</MenuItem>
          <MenuItem value="option2">Metropolitan region</MenuItem>
          <MenuItem value="option3">Northern area</MenuItem>
          <MenuItem value="option4">Telemedicine</MenuItem>
        </AccountField>
        <Input
          type="file"
          name="profile-photo"
          accept="image/*"
          id="profile-photo"
          onChange={handlePhotoChange}
        />

        <AccountButton type="submit" variant="contained" color="primary">
          Save Changes
        </AccountButton>
      </AccountForm>
    </AccountContainer>
  );
};