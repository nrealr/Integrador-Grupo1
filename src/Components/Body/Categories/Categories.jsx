import React from 'react';
import {CategoriesList} from './CategoriesList';

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
      <CategoriesList />
    </div>
  </div>
);


