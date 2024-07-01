import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PasswordContainer = styled('div')`
  padding: 20px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
`;

export const PasswordForm = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 100%;
`;

export const PasswordField = styled(TextField)`
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  flex-grow: 1;
  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export const PasswordButton = styled('button')`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #337ab7;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #23527c;
  }
`;

export const StyledPasswordTitle = styled('h2')`
  background-color: #62c0bb;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  width: 100%;
  display: block;
  padding: 10px;
  text-align: center;
`;