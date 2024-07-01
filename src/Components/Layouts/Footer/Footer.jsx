import React, { useState } from 'react';
import './Footer.styles.css';
import { Link } from 'react-router-dom';
import { Copyright } from './Copyright';
import { Fab } from '@mui/material';
import { WhatsappIcon } from 'react-share';

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
        <Fab
          size="small"
          color="secondary"
          aria-label="Facebook"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="icon"
            src="/images/ico-facebook.png"
            alt="Connect with us on Facebook"
          />
        </Fab>
        <Fab
          size="small"
          color="secondary"
          aria-label="Instagram"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="icon"
            src="/images/ico-instagram.png"
            alt="Follow us in Instagram"
          />
        </Fab>
        <Fab
          size="small"
          color="secondary"
          aria-label="WhatsApp"
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="icon"
            src="/images/ico-whatsapp.png"
            alt="Write us by WhatsApp"
          />
        </Fab>
      </div>

    </footer>

  );
};

