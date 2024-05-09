import React from 'react';
import "./Body.styles.css"
import { Categories } from './Categories';
import { Recommendations } from './Recommendations';
import { Search } from './Search';




const Body = () => {
  return (
    <div className="body">
      <Search />
      <Categories />
      <Recommendations />
    </div>
  );
};

export default Body;
