import React from "react";
import {AddProductFunction} from "../Components"
import "./AddProduct.styles.css"

export const AddProduct = () => {
  

  return (
    <div className="add-product-display">
      <h2>Add a new product</h2>
      
      <AddProductFunction/>
    </div>
  );
};
