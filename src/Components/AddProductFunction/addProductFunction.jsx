import axios from 'axios';
import React, { useState } from 'react'
import { urlApi } from '../utils/routes';


const AddProductFunction = () => {


    const [product, setProduct] = useState({
        id: "21",
        name: "",
        lastname: "",
        rut: "",
        img: "dummyinfo.jpg"
      });
    
      const [error, setError] = useState("");
      const [success, setSuccess] = useState("")
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.get(`${urlApi}?rut=${product.rut}`);
          if (response.data.length > 0) {
            setError("Field Rut already exist");
          } else {
            await axios.post(urlApi, product);
            setProduct({id: "",
            name: "",
            lastname: "",
            rut: "",
            img: ""
          })
            setError("");
            setSuccess("Product added")
          }
        } catch (error) {
          console.error("Error on sending data:", error);
        }

        console.log(product);
    
      };

  return (
    <div>
      
      <form className="add-product-form">
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
        <label>Description:</label>
        <input
          type="text"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <label>Image</label>
        <input type="file" 
        accept='image/*'/>


        {error && <p>{error}</p>}
        {!error && success}

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default AddProductFunction