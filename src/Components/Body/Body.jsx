import React from 'react';
import Search from './Search';
import Categories from './Categories';
import Recommendations from './Recommendations';
import "./Body.styles.css"

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
