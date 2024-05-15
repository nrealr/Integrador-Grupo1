import React from 'react';

/**
 * 
 * @param {companyName} param0 
 * @returns {React.Component} Copyright function adding the current year
 */

const Copyright = ({ companyName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright">
      <p>© {currentYear} {companyName}. All rights reserved.</p>
    </div>
  );
};

export default Copyright;