import React from 'react';
import './RecommendationsPagination.styles.css';

export const RecommendationsPagination = ({ doctorsPerPage, totalDoctors, paginate, currentPage }) => {
  const pageNumbers = [];
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
  };

  return (
    <nav>
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
    </nav>
  );
};
