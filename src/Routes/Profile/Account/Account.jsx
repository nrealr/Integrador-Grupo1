import { useState, useEffect } from 'react';
import axios from 'axios';
import { AccountContainer, AccountHeader, AccountForm, AccountField, AccountButton } from './Account.styled';
import { Input, MenuItem } from '@mui/material';
import { useDoctorStates } from "../../../Context";
import { getUsersById, updateUser } from "../../../Services/Users"; 

/**
 * Account component
 */
export const Account = () => {
  const { currentUser } = useDoctorStates();
  const [userData, setUserData] = useState({
    name: '',
    lastname: '',
    email: '',
    address: '',
    phone: '',
    medicalCenter: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUsersById();
        setUserData({
          name: data.name || 'please update',
          lastname: data.lastname || 'please update',
          email: data.email || 'please update',
          address: data.address || 'please update',
          phone: data.phone || 'please update',
          medicalCenter: data.medicalCenter || ''
        });
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(userData);
      alert("User data updated successfully!");
    } catch (error) {
      console.error("Error updating user data: ", error);
      alert("Failed to update user data.");
    }
  };

  return (
    <AccountContainer>
      <AccountHeader>
        Welcome {userData.name}!
      </AccountHeader>

      <AccountForm onSubmit={handleSubmit}>
        <AccountField
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
        <AccountField
          label="Last Name"
          name="lastname"
          value={userData.lastname}
          onChange={handleInputChange}
        />
        <AccountField
          label="Email"
          name="email"
          value={userData.email}
          disabled
        />
        <AccountField
          label="Address"
          name="address"
          value={userData.address}
          onChange={handleInputChange}
        />
        <AccountField
          label="Phone"
          name="phone"
          value={userData.phone}
          onChange={handleInputChange}
        />
       {/*  <AccountField
          label="Select your preferred medical center or telemedicine"
          name="medicalCenter"
          value={userData.medicalCenter}
          select
          onChange={handleInputChange}
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
        /> */}

        <AccountButton type="submit" variant="contained" color="primary">
          Save Changes
        </AccountButton>
      </AccountForm>
    </AccountContainer>
  );
};