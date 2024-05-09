// Footer.js
import React from 'react';
import './Footer.styles.css';

const Footer = () => {

    const currentYear = new Date().getFullYear();
  
      return (
        <footer>
          <div className="logo">
            <img src="/images/logo.ico" alt="Company Logo" />
          </div>
          <div className="copyright">
            <p>© {currentYear} Company Name. All rights reserved.</p>
          </div>
        </footer>
      );
  
  };
  
  
  export default Footer;