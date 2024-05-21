import React from 'react';
import './CategoryButton.styles.css'

export const CategoryButton = ({ name }) => (
  <button className="category-button" onClick={() => console.log(`Clicked on ${name}`)}>
    {name}
  </button>
);
