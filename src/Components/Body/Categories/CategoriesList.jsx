import React from 'react';
import {CategoryButton} from './CategoryButton';
import { categories } from '../../../Constants';
import './CategoriesList.styles.css';

export const CategoriesList = () => (
  <div className="categories-list">
    {categories.map((category, index) => (
      <CategoryButton key={index} name={category} />
    ))}
  </div>
);
