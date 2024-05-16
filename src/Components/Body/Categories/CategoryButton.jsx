import React from 'react';

export const CategoryButton = ({ name }) => (
  <div className="button" onClick={() => console.log(`Clicked on ${name}`)}>
    {name}
  </div>
);
