import React from "react";
import "./AddProduct.styles.css"
import { AddSpecialtyFunction } from "../../../Components/AddProductFunction/addSpecialtyFunction";

export const AddSpecialty = () => {
  

  return (
    <div className="add-product-display">
      <h2>Add a new specialty</h2>
      
      <AddSpecialtyFunction/>
    </div>
  );
};