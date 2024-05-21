import React from 'react';
import './Copyright.styles.css';

/**
 * 
 * @param {companyName} param0 
 * @returns {React.Component} Copyright function adding the current year
 */

export const Copyright = ({ companyName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright">
      <p>© {currentYear} {companyName}. All rights reserved.</p>
    </div>
  );
};
