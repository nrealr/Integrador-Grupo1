import React from 'react';
import "./Body.styles.css";
import { Search } from './Search';
import { Categories } from './Categories';
import { Recommendations } from './Recommendations';


/**
 * 
 * @returns Body with three sections, search, categories and recommendations
 */



const Body = () => (
  <div className="body">
    <div className="body-section">
      <Search />
    </div>
    <div className="body-section">
      <Categories/>
    </div>
    <div className="body-section">
      <Recommendations />
    </div>
  </div>
);

const Component1 = () => <div>Component 1</div>;
const Component2 = () => <div>Component 2</div>;
const Component3 = () => <div>Component 3</div>;

export default Body;