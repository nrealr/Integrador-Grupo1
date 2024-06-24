// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AccountContainer, AccountHeader, AccountForm, AccountField, AccountButton } from './Account.styled';
// import { Input, MenuItem } from '@mui/material';
// import { useDoctorStates } from "../../../Context";

// /**
//  * Account component
//  */
// export const Account = () => {

//   const {currentUser} = useDoctorStates();
//   console.log(currentUser);

//   return (
//     <AccountContainer>
//       <AccountHeader>
//         Welcome, {currentUser.name}!
//       </AccountHeader>

//       <AccountForm>
//         <AccountField
//           label="Name"
//           name="name"
//           value={currentUser.name}
//         />
//         <AccountField
//           label="Last Name"
//           name="lastName"
//           value={currentUser.lastname}
//         />
//         <AccountField
//           label="Email"
//           name="email"
//           value={currentUser.email}
//         />
//         <AccountField
//           label="Select your preferred medical center or telemedicine"
//           name="medicalCenter"
//           value={currentUser.medicalCenter}
//           select
//         >
//           <MenuItem value="option1">Southern area</MenuItem>
//           <MenuItem value="option2">Metropolitan region</MenuItem>
//           <MenuItem value="option3">Northern area</MenuItem>
//           <MenuItem value="option4">Telemedicine</MenuItem>
//         </AccountField>
//         <Input
//           type="file"
//           name="profile-photo"
//           accept="image/*"
//           id="profile-photo"

//         />

//         <AccountButton type="submit" variant="contained" color="primary">
//           Save Changes
//         </AccountButton>
//       </AccountForm>
//     </AccountContainer>
//   );
// };

import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Edit, Visibility, Delete } from '@mui/icons-material';
import { StyledDataGrid } from './Account.styled';
import { useDoctorStates } from '../../../Context';


const columns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    flex: 1,
  },
  {
    field: 'lastname',
    headerName: 'Lastname',
    width: 150,
    flex: 1,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    flex: 1,
  },
  {
    field: 'password',
    headerName: 'Password',
    width: 150,
    flex: 1,
  },
  {
    field: 'profilePicture',
    headerName: 'Profile Picture',
    width: 100,
    flex: 1,
    renderCell: (params) => (
      <img src={params.value} alt="Profile Picture" width={50} height={50} />
    ),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 100,
    flex: 1,
    renderCell: (params) => (
      <div>
        <Tooltip title="View">
          <IconButton aria-label="View">
            <Visibility />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton aria-label="Edit">
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <Delete />
          </IconButton>
        </Tooltip>
      </div>
    ),
  },
];



export const Account = () => {

  const { currentUser } = useDoctorStates();


  return (

    <StyledDataGrid
      rows={[{ id: currentUser.id, ...currentUser }]} // Add id property and spread the currentUser object
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      columnWidth={150} // set fixed column width
    />
  );
};

