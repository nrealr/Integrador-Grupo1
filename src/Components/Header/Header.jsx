import React from "react";
import "./Header.styles.css"
import { Link } from "react-router-dom";



export const Header = () => {
    return(


    <header>
      <div className="logo">
      <Link to="/"><img src="/images/logo.ico" alt="Application Logo" /></Link>
      </div>
      <nav>
        <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="#"><li>About</li></Link>
        <Link to="#"><li>Contact</li></Link>
        </ul>
      </nav>
      <div className="actions">
        <button className="btn btn-create-account">Crear cuenta</button>
        <button className="btn btn-login">Iniciar sesión</button>
      </div>
    </header>
  );
};

export default Header;

