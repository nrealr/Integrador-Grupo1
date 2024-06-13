import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #63c0bb;
  margin: 0 auto;
  max-width: 600px;
`;

export const AppointmentList = () => {
  return (
    <Box>
      <h1>Your appointment has been scheduled</h1>
    </Box>
  );
};
