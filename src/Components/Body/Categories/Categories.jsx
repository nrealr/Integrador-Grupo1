import "./Categories.styles.css";
import React from 'react';

/**
 * 
 * @returns {React.Component} Section for service's categories
 */



export const Categories = () => (
  <div className="container">
    <div className="column1">
      <h2>Explore diverse medical specialities</h2>
      <h1>Discover a Wide Range of Specialties Awaited Just Below!</h1>
      <div className="search-button">
        <button>Check them here</button>
      </div>
    </div>
    <div className="column2">
      <div className="button">Internal Medicine</div>
      <div className="button">Dermatology</div>
      <div className="button">Obstetrics and Gynecology</div>
      <div className="button">Psychiatry</div>
      <div className="button">Pediatrics</div>
      <div className="button">Cardiology</div>
      <div className="button">Ophthalmology</div>
      <div className="button">Orthopedics</div>
    
    </div>
  </div>
);

