import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_API } from "../../Constants";
import { addDoctor, getSpecialties } from "../../Services";

export const AddProductFunction = () => {
  const [product, setProduct] = useState({
    name: "",
    lastname: "",
    rut: "",
    img: null,
    description: "",
    specialtyId: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const response = await axios.get(`${SERVER_API}/specialties/list`);
        if (Array.isArray(response.data)) {
          setSpecialties(response.data);
        } else {
          console.error("Specialties response is not an array:", response.data);
          setSpecialties([]);
        }
      } catch (error) {
        console.error("Error fetching specialties:", error);
        setSpecialties([]);
      }
    };

    fetchSpecialties();
  }, []);

  const validateForm = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Name field is mandatory";
    }

    if (!values.lastname) {
      errors.lastname = "Lastname field is mandatory";
    }

    if (!values.rut) {
      errors.rut = "RUT is mandatory";
    } else if (!/^\d{7,8}-[0-9Kk]$/.test(values.rut)) {
      errors.rut = "RUT format not valid";
    }

    if (!values.img) {
      errors.img = "Image file is mandatory";
    } else if (!values.img.name.toLowerCase().endsWith(".jpg")) {
      errors.img = "Image file must be a .jpg";
    }

    if (!values.description) {
      errors.description = "Description is mandatory";
    }

    if (!values.specialtyId) {
      errors.specialtyId = "Specialty is mandatory";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(product);
    if (Object.keys(validationErrors).length === 0) {
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('lastname', product.lastname);
      formData.append('rut', product.rut);
      formData.append('img', product.img);
      formData.append('description', product.description);
      formData.append('specialtyId', product.specialtyId);

      try {
        const response = await axios.post(`${SERVER_API}/doctors/register`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        setProduct({
          name: "",
          lastname: "",
          rut: "",
          img: null,
          description: "",
          specialtyId: "",
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
  };

  return (
    <div>
      <form className="add-product-form" encType="multipart/form-data" onSubmit={handleSubmit}>
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
        <label>Image</label>
        <input
          type="file"
          accept="image/jpg"
          onChange={(e) => setProduct({ ...product, img: e.target.files[0] })}
        />
        <label>Description:</label>
        <input
          type="text"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
        />
         <label>Specialty:</label>
        <select
          value={product.specialtyId}
          onChange={(e) => setProduct({ ...product, specialtyId: e.target.value })}
        >
          <option value="">Select a specialty</option>
          {specialties.map((specialty) => (
            <option key={specialty.id} value={specialty.id}>
              {specialty.name}
            </option>
          ))}
        </select>

        {error && (
          <div className="errorMessages">
            {Object.keys(error).map((key) => (
              <p key={key}>{error[key]}</p>
            ))}
          </div>
        )}
        {!error && success}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
