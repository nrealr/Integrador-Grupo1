import React from 'react';
import "./Body.styles.css"
import { Categories } from './Categories';
import { Recommendations } from './Recommendations';
import { Search } from './Search';


/**
 * 
 * @returns Body with three sections, search, categories and recommendations
 */

const Body = () => {
  return (
    <div className="body">
      <Search className="box1"/>
      <Categories className="box2"/>
      <Recommendations className="box3"/>
    </div>
  );
};

export default Body;
