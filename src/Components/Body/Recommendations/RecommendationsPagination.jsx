import React from 'react';
/*import './RecommendationsPagination.styles.css';*/
import { Box, Pagination } from '@mui/material';

export const RecommendationsPagination = ({ doctorsPerPage, totalDoctors, paginate, currentPage }) => {
  const pageCount = Math.ceil(totalDoctors/doctorsPerPage);

  const handlePageChange = (event, value) => {
    paginate(value);
  };
  

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
        color="secondary"
        showFirstButton
        showLastButton
      />
    </Box>

  );
};
