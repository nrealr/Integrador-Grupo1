import "./Recommendations.styles.css";
import React from 'react';

export const Recommendations = () => {

    const professional = "doctor"
  return (

    <div className="recommendations">
      <h2>Recommendations</h2>
        <ul>
          <li>
            <a href="#">{professional}</a>
          </li>
          <li>
            <a href="#">{professional}</a>
          </li>
          <li>
            <a href="#">{professional}</a>
          </li>
        </ul>
    </div>
  );
};

export default Recommendations;