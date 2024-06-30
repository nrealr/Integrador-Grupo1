import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

export const StyledFavoritesTable = styled(DataGrid)`
  && {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    height: 100vh; /* Ajustar la altura para que la tabla se vea completa */

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

export const StyledFavoritesAction = styled('div')`
  float: right;
  padding: 15px;
`;

export const StyledFavoritesAddButton = styled('button')`
  && {
    background-color: #FF2D55;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: auto;

    &:hover {
      background-color: #e94c6afc;
      color: white;
    }
  }
`;

export const StyledFavoritesDeleteButton = styled('button')`
  && {
    background-color: white;
    color: #102c5b;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #E21919;
      color: white;
    }
  }
`;

export const StyledFavoritesSection = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledFavoritesTitle = styled('h2')`
  background-color: #62c0bb;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  width: 100%;
  display: block;
  padding: 10px;
`;

export const StyledFavoritesSubtitle = styled('h4')`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

export const FavoritesHeader = styled.header`
  padding: 10px;
  text-align: center;
`;