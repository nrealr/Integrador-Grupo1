import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import './layout.styles.css';
import Body from '../Body/Body';
import { Outlet } from 'react-router-dom';

/**
 * 
 * @return {ReactComponent} Layout: change theme dark/light mode.
 */
export const Layout = () => {


  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const darkModeClass = isDarkMode ? "layout-dark" : "layout";
  

  return (
    <div className={'layout'}>
        
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
  );
};
