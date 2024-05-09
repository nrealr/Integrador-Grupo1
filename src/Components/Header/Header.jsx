import React from "react";
import "./Header.styles.css"



export const Header = () => {
    return(


    <header>
      <div className="logo">
        <img src="/images/logo.ico" alt="Company Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
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

