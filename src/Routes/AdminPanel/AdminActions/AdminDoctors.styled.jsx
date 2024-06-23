
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

export const StyledAdminTable = styled(DataGrid)`
  && {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    width: 100%;

    /* Remove grid filler and make columns occupy entire space */
    .MuiDataGrid-columnsContainer {
      display: flex;
      flex-wrap: nowrap;
    }

    .MuiDataGrid-columnHeaders {
      flex: 1;
    }

    .MuiDataGrid-columnHeadersCell {
      flex: 1;
    }

    .MuiDataGrid-cell {
      flex: 1;
    }

    .MuiDataGrid-row {
      flex: 1;
    }

    .MuiDataGrid-virtualScroller {
      overflow-x: hidden;
    }

    .MuiDataGrid-virtualScrollerContent {
      overflow-x: hidden;
    }
  }
`;

export const StyledAdminAction = styled('div')`
  float: right;
  padding: 15px;
`;

export const StyledAdminAddButton = styled('button')`
  && {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: auto;

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

export const StyledAdminActivitySection = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;


export const StyledAdminActivityTitle = styled('h2')`

  background-color: #62c0bb; /* add red background only to the title */
  font-size: 24px;
  font-weight: bold;
  margin: 0; /* remove default margin */
  width: 100%; /* make the title take up the full width */
  display: block; /* make the title a block element to take up full width */
  padding: 10px;

`;


export const StyledAdminActivitySubtitle = styled('h4')`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;

`;

export const AdminHeader = styled.header`
  padding: 10px;
  text-align: center; /* center the title horizontally */

`;
