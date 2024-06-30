import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

export const StyledAppointmentListTable = styled(DataGrid)`
  && {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    height: 70vh; /* Ajustar la altura según sea necesario */

    .MuiDataGrid-columnsContainer {
      display: flex;
      flex-wrap: nowrap;
    }

    .MuiDataGrid-columnHeader,
    .MuiDataGrid-cell {
      flex: 1;
    }

    .MuiDataGrid-columnHeadersCell {
      flex: 1;
    }

    .MuiDataGrid-footerContainer {
      padding-top: 1rem;
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

export const StyledAppointmentListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledAppointmentListTitle = styled.h2`
  background-color: #62c0bb;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  width: 100%;
  display: block;
  padding: 10px;
`;

export const AppointmentListHeader = styled.header`
  padding: 10px;
  text-align: center;
`;

export const StyledAppointmentListAction = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CancelButton = styled.button`
  background-color: #e21919;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c70000;
  }
`;

