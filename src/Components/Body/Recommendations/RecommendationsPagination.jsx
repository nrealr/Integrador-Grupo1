import React from 'react';
/*import './RecommendationsPagination.styles.css';*/
import { Box, Pagination } from '@mui/material';

export const RecommendationsPagination = ({ doctorsPerPage, totalDoctors, paginate, currentPage }) => {
  const pageCount = Math.ceil(totalDoctors/doctorsPerPage);

  const handlePageChange = (event, value) => {
    paginate(value);
  };
  
  /*const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDoctors / doctorsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  const handleFirst = () => {
    paginate(1);
  };

  const handleLast = () => {
    paginate(pageNumbers.length);
  };*/

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
    /*<nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button onClick={handleFirst} className="page-link" disabled={currentPage === 1}>
            &laquo;&laquo;
          </button>
        </li>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button onClick={handlePrevious} className="page-link" disabled={currentPage === 1}>
            &laquo;
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <button onClick={handleNext} className="page-link" disabled={currentPage === pageNumbers.length}>
            &raquo;
          </button>
        </li>
        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <button onClick={handleLast} className="page-link" disabled={currentPage === pageNumbers.length}>
            &raquo;&raquo;
          </button>
        </li>
      </ul>
      </nav>*/
  );
};
