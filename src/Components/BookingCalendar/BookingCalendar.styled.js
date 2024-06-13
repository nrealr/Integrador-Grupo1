import styled from 'styled-components';
import { StaticDatePicker as DatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export const StaticDatePicker = styled(DatePicker)`
  && button.Mui-disabled {
    background-color: white;
    color: red;
    display: flex;
    flex-direction: column;
  }
`;