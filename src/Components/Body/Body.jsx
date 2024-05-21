import React from 'react';
import "./Body.styles.css";
import { Search } from './Search';
import { Categories } from './Categories';
import { Recommendations } from './Recommendations';


/**
 * 
 * @returns Body with three sections, search, categories and recommendations
 */
export const Body = () => (
  <div className="body">
    <Search />
    <div className="body-sections">
      <Categories/>
      <Recommendations />
     </div>
  </div>
);
