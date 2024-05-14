import axios from 'axios';
import React, { useState } from 'react'
import { SERVER_API } from '../../Constants';
import { addDoctor } from '../../Services/addDoctor';


const AddProductFunction = () => {


    const [product, setProduct] = useState({
        name: "",
        lastname: "",
        rut: "",
        img: "",
        description: ""
      });
    
      const [error, setError] = useState("");
      const [success, setSuccess] = useState("")
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await addDoctor(product);
          setProduct({
            name: "",
            lastname: "",
            rut: "",
            img: "",
            description: ""
          });
          setError("");
          setSuccess("Doctor added");
        } catch (error) {
          console.error("Error on sending data:", error);
          setError("Error adding doctor");
        }
      
        console.log(product);
      };

  return (
    <div>
      
      <form className="add-product-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <label>Last name:</label>
        <input
          type="text"
          value={product.lastname}
          onChange={(e) => setProduct({ ...product, lastname: e.target.value })}
        />
        <label>Rut:</label>
        <input
          type="text"
          value={product.rut}
          onChange={(e) => setProduct({ ...product, rut: e.target.value })}
        />
        <label>Image url</label>
        <input type="text" 
        value={product.img}
        onChange={(e) =>
          setProduct({ ...product, img: e.target.value })
        }/>
        <label>Description:</label>
        <input
          type="text"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />


        {error && <p>{error}</p>}
        {!error && success}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddProductFunction