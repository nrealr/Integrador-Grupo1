import React from 'react';
import './CategoryButton.styles.css'

export const CategoryButton = ({ name }) => (
  <div className="button" onClick={() => console.log(`Clicked on ${name}`)}>
    {name}
  </div>
);
