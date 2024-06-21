import React from "react";
import "./AddProduct.styles.css"
import { AddFeatureFunction } from "../../../Components/AddProductFunction/addFeatureFunction";

export const AddFeature = () => {
  

  return (
    <div className="add-product-display">
      <h2>Add a new feature</h2>
      
      <AddFeatureFunction/>
    </div>
  );
};
