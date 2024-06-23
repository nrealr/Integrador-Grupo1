import { Table, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import styled from "styled-components";


export const StyledTitle = styled(Typography)`
  background-color: #62c0bb; /* Replace with your desired background color */
  padding: 10px; /* Add some padding to make it look nicer */
  text-align: center; /* Center the text */
  border-radius: 10px; /* Add some rounded corners */
  margin-bottom: 1rem; /* Keep the original margin bottom */
`;

export const StyledTable = styled(Table)`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ccc; /* Replace with your desired color */
  table-layout: fixed; /* Change to fixed layout */
 
`;

export const StyledTableCell = styled(TableCell)`
  font-size: 14;
  padding: 10px; /* Replace with your desired padding */
  border: 1px solid #ddd; /* Replace with your desired color */
  word-break: break-word; /* Add this to make the cell content wrap */
  overflow-wrap: break-word; /* Add this to make the cell content wrap */
  background-color: rgba(171, 203, 200, 0.87);
  
`;

export const StyledTableHead = styled(TableHead)`
  background-color: white; /* Replace with your desired color */
  color: #fff; /* Replace with your desired color */
  th {
    padding: 10px; /* Replace with your desired padding */
  }
  tr:first-child {
    background-color: black; /* Solid red background color */
  }

`;

export const StyledTableRow = styled(TableRow)`

  &:nth-of-type(odd) {
    background-color: #f0f0f0; /* Replace with your desired color */
  }
  &:last-child td, &:last-child th {
    border: 0;
  }
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0; /* Replace with your desired color */
  }
  td {
    padding: 10px; /* Replace with your desired padding */
  }
  
`;