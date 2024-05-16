import React from 'react';
import {CategoryButton} from './CategoryButton';
import { categories } from '../../../Constants';

export const CategoriesList = () => (
  <div className="categories-list">
    {categories.map((category, index) => (
      <CategoryButton key={index} name={category} />
    ))}
  </div>
);
