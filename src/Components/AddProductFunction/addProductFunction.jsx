import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SERVER_API } from '../../Constants';
import { addDoctor } from '../../Services';
import { getSpecialties } from '../../Services/getSpecialties';


export const AddProductFunction = () => {


    const [product, setProduct] = useState({
        name: "",
        lastname: "",
        rut: "",
        img: "",
        description: "",
        specialtyID: "1" //giving it a default value here, have to find out how to get the value from the default option in the specialties select after it's done mapping
      });
    
      const [error, setError] = useState("");
      const [success, setSuccess] = useState("")

      const [specialties, setSpecialties] = useState([])

      const loadSpecialties = async () =>{
        const specData = await getSpecialties();
        setSpecialties(specData);
      }
    
      const validateForm = (values) => {
        let errors = {};
      
        if (!values.name) {
          errors.name = 'Name field is mandatory';
        }
      
        if (!values.lastname) {
          errors.lastname = 'Lastname field is mandatory';
        }
      
        if (!values.rut) {
          errors.rut = 'RUT is mandatory';
        } else if (!/^\d{7,8}-[0-9Kk]$/.test(values.rut)) {
          errors.rut = 'RUT format not valid';
        }

        if (!values.img) {
          errors.img = 'Image URL is mandatory';
        } else if (!isValidURL(values.img)) {
          errors.img = 'Image URL not valid';
        }
      
        if (!values.description) {
          errors.description = 'Description is mandatory';
        }

        if (!values.specialtyID) {
          errors.description = 'Specialty is mandatory';
        }

      
        return errors;
      };
      
      const isValidURL = (url) => {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm(product);
        if (Object.keys(validationErrors).length === 0){
          try {
            const response = await addDoctor(product);
            setProduct({
              name: "",
              lastname: "",
              rut: "",
              img: "",
              description: "",
              specialtyID: ""
            });
            setError("");
            setSuccess("Doctor added");
          } catch (error) {
            console.error("Error on sending data:", error);
            setError("Error adding doctor");
          }
        } else {
          setError(validationErrors);
        }

      
        console.log(product);
      };

      useEffect(() =>{
        loadSpecialties();
      }, [])

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
          }/>
          <label>Specialty:</label>
          <select
            value={product.specialtyID}
            onChange={(e) =>
            setProduct({ ...product, specialtyID: e.target.value})} 
            >
              {specialties.map((specialty) =>{
                return <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
              })}


            </select>


        {error && 
          <div className='errorMessages'>
          {Object.keys(error).map((key) => (
            <p key={key}>{error[key]}</p>
          ))}
        </div>}
        {!error && success}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
