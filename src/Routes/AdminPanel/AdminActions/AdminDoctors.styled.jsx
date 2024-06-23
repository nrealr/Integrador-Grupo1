import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

export const StyledAdminTable = styled(DataGrid)`
  && {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
  }
`;

export const StyledAdminAddButton = styled('button')`
  && {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #3e8e41;
    }
  }
`;

export const StyledAdminDeleteButton = styled('button')`

  && {

    background-color: #FF3737; /* red color */

    color: #fff;

    padding: 10px 20px;

    border: none;

    border-radius: 5px;

    cursor: pointer;


    &:hover {

      background-color: #E21919; /* darker red color */

    }

  }

`;