import React, { useState } from 'react';
import './Footer.styles.css';
import { Link } from 'react-router-dom';
import { Copyright } from './Copyright';

/**
 * 
 * @return {React.Component} Footer component, with copyright, logo and socialmedia */

export const Footer = () => {

  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const darkModeClass = isDarkMode ? "layout-dark" : "layout";


  const companyName = "MediConnect";

  return (

    <footer className='footer'>

      <div className="logo-footer">
        <img src="/images/ico-logo-transparent.png" alt="Company Logo" />
      </div>

      <Copyright companyName={companyName} />



      <div className="footer-social">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="icon"
            src="/images/ico-facebook.png"
            alt="Connect with us on Facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="icon"
            src="/images/ico-instagram.png"
            alt="Follow us in Instagram"
          />
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="icon"
            src="/images/ico-whatsapp.png"
            alt="Write us by WhatsApp"
          />
        </a>
      </div>

    </footer>

  );
};

