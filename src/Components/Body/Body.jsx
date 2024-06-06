import React from 'react';
import "./Body.styles.css";
import { Search } from './Search';
import { Recommendations } from './Recommendations';
import { SpecialityList } from './Specialities';



/**
 * 
 * @returns Body with three sections, search, specialities and recommendations
 */
export const Body = () => (
  <div className="body">
    <Search />
    <div className="body-sections">
      <SpecialityList/>
      <Recommendations />
     </div>
  </div>
);
