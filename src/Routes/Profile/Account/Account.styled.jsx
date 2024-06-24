import { Typography } from '@mui/material';
import styled from 'styled-components';

export const AccountContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const AccountLabel = styled(Typography)`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AccountValue = styled(Typography)`
  margin-bottom: 20px;
`;