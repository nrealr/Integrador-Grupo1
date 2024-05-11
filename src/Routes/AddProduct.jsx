import axios from "axios";
import React, { useState } from "react";
import AddProductFunction from "../Components/AddProductFunction/addProductFunction"

const AddProduct = () => {
  

  return (
    <div>
      <h2>Add a new product</h2>
      
      <AddProductFunction/>
    </div>
  );
};

export default AddProduct;