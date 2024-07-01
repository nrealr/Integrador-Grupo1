// import styled from 'styled-components';
// import { Grid, Card, CardContent } from '@mui/material';

// export const DoctorCard = styled(Card)`
//   margin-top: 70px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   background-color: #f7f7f7;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// export const DoctorImage = styled.img`
//   height: 200px;
//   width: 200px;
//   object-fit: cover;
//   border-radius: 50%;
//   margin-bottom: 20px;
// `;

// export const DoctorData = styled(CardContent)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// export const AppointmentArea = styled(Grid)`
//   display: flex;
//   justify-content: space-between;
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;
//   flex-direction: column;
//   align-items: center;
// `;

// Detail.styled.js

import styled from 'styled-components';

import { Grid, Card, CardContent } from '@mui/material';


export const DoctorCard = styled(Card)`
 border: 1px solid red;
  display: flex;
  padding: 20px;
  background-color: green;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100vw; /* occupy full width of the screen */
margin: 0 auto; /* center the card horizontally */
margin-top: auto;
`;

export const DoctorImage = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 1px solid red;
`;


export const DoctorData = styled(CardContent)`
  flex-basis: 40%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid red;
`;

export const AppointmentArea = styled(Grid)`
  flex-basis: 60%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
`;

export const CalendarContainer = styled.div`
  margin-bottom: 20px;
  border: 1px solid red;
  display: flex;
`;

export const BtnAppointmentContainer = styled.div`
  margin-top: 20px;
  border: 1px solid red;
  display: flex;
`;