import { useState } from "react";
import "./Header.styles.css"
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Constants";

/**
 * 
 * @returns {ReactComponent} Header component, logo and buttons for create account and log in
 */

export const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkModeClass = isDarkMode ? "layout-dark" : "layout";
  
  return(

  <header className="header">

      
    <div className="logo-header">
      <Link to="/"><img src="/images/ico-logo-fullcolor.png" alt="Application Logo" /></Link>
    </div>
    
    <nav className="navbar">
           
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        
          <li>
            <Link to="/specialities">Specialities</Link>
          </li>
        
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        
        </ul>

    </nav>
   
      <div className="header-buttons">

          <button className="btn-create-account">Create Account</button>
          <Link to={ROUTES.ADMIN}>{" "}
            <button className="btn-login">Log in</button>{" "}
          </Link>

      </div>

      {/* <img className='icon-theme' 
              onClick={()=> dispatch({type: "CHANGUE_MODE"})}
              src="/images/ico-color-theme.png" 
              alt="Changue mode (dark/light)" 
      />  */}

  </header>
  );
};


