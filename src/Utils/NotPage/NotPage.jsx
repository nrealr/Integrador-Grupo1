
import './NotPage.styles.css';
import React from 'react';

/**
 * @return {ReactComponent} Componente que muestra imagen de página bajo construcción
 */
export const NotPage = () => {
  return (
    <div  className='not-page'>
       <img 
        src='/images/not-page.jpg' 
        alt="page under construction" 
        />
    </div>
  );
};