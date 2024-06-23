import { useState, useEffect } from 'react';
import axios from 'axios';
import { AccountContainer, AccountHeader, AccountForm, AccountField, AccountButton } from './Account.styled';
import { Input, MenuItem } from '@mui/material';
import { useDoctorStates } from "../../../Context";

/**
 * Account component
 */
export const Account = () => {

  const {currentUser} = useDoctorStates();
  console.log(currentUser);

  return (
    <AccountContainer>
      <AccountHeader>
        Welcome, {currentUser.name}!
      </AccountHeader>

      <AccountForm>
        <AccountField
          label="Name"
          name="name"
          value={currentUser.name}
        />
        <AccountField
          label="Last Name"
          name="lastName"
          value={currentUser.lastname}
        />
        <AccountField
          label="Email"
          name="email"
          value={currentUser.email}
        />
        <AccountField
          label="Select your preferred medical center or telemedicine"
          name="medicalCenter"
          value={currentUser.medicalCenter}
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
         
        />

        <AccountButton type="submit" variant="contained" color="primary">
          Save Changes
        </AccountButton>
      </AccountForm>
    </AccountContainer>
  );
};