import React, { useState } from 'react';
import './Footer.styles.css';
import { Link } from 'react-router-dom';
import Copyright from '../../../Utils/Copyright';

/**
 * 
 * @return {React.Component} Footer component, with copyright, logo and socialmedia */

export const Footer = () => {

  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const darkModeClass = isDarkMode ? "layout-dark" : "layout";
    
  // const currentYear = new Date().getFullYear();
  const companyName = "MediConnect";
  
  return (

    <footer className='footer'>

      <div className="logo-footer">
        <img src="/images/ico-logo-transparent.png" alt="Company Logo" />
      </div>

      {/* <div className="copyright">
        <p>© {currentYear} {companyName}. All rights reserved.</p>
      </div> */}

<Copyright/>
      <div className="footer-social">
          
        <Link
          to={{
            pathname: 'https://www.facebook.com/',
            target: '_blank',
            rel: 'noopener noreferrer'
          }}
        >
          <img
            className="icon"
            src="/images/ico-facebook.png"
            alt='Go to Facebook'
          />
        </Link>
        <Link
          to={{
            pathname: 'https://www.instagram.com/',
            target: '_blank',
            rel: 'noopener noreferrer'
          }}
        >
          <img
            className="icon"
            src="/images/ico-instagram.png"
            alt='Go to Instagram'
          />
        </Link>
        <Link
          to={{
            pathname: 'https://wa.me/',
            target: '_blank',
            rel: 'noopener noreferrer'
          }}
        >
          <img
            className="icon"
            src="/images/ico-whatsapp.png"
            alt='Go to whatsapp'
          />
        </Link>
      </div>

    </footer>
        
  );  
};
  
  
export default Footer;
