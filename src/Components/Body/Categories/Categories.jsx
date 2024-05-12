import "./Categories.styles.css";
import React from 'react';

/**
 * 
 * @returns {React.Component} Section for service's categories
 */
export const Categories = () => {

    const categories = "categoria"

  return (

    <div className="categories">
      <h2>Specialities</h2>
        <ul>
          <li>
            <a href="#">{categories}</a>
          </li>
          <li>
            <a href="#">{categories}</a>
          </li>
          <li>
            <a href="#">{categories}</a>
          </li>
      </ul>
    </div>
  );
};

export default Categories;