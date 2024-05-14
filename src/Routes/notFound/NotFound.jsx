
import './NotFound.styles.css';
import React from 'react';

/**
 * @return {ReactComponent} Componente que muestra imagen de error 404
 */
export const NotFound = () => {
  return (
    <div  className='not-found'>
       <img 
        src="images/not-found.png" 
        alt="page not found" 
        />
    </div>
  );
};
