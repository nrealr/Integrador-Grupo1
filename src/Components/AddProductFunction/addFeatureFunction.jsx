import axios from "axios";
import React, { useState } from "react";
import { SERVER_API } from "../../Constants";
import { addDoctor, addFeature } from "../../Services";

export const AddFeatureFunction = () => {
    const [feature, setFeature] = useState({
      name: "",
      icon: null, // Use null to represent the file
    });
  
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    const validateForm = (values) => {
      let errors = {};
  
      if (!values.name) {
        errors.name = "Name field is mandatory";
      }
  
      if (!values.icon) {
        errors.icon = "The icon is mandatory";
      }
  
      return errors;
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0]; // Get the first file from the input
      setFeature({ ...feature, icon: file });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const validationErrors = validateForm(feature);
      if (Object.keys(validationErrors).length === 0) {
        try {
          const formData = new FormData();
          formData.append('name', feature.name);
          formData.append('icon', feature.icon);
  
          const response = await addFeature(formData);
          setFeature({
            name: "",
            icon: null,
          });
          setError("");
          setSuccess("Feature added");
        } catch (error) {
          console.error("Error on sending data:", error);
          setError("Error adding feature");
        }
      } else {
        setError(validationErrors);
      }
  
      console.log(feature);
    };
  
    return (
      <div>
        <form className="add-product-form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={feature.name}
            onChange={(e) => setFeature({ ...feature, name: e.target.value })}
          />
          <label>Icon:</label>
          <input
            type="file"
            onChange={(e) => handleFileChange(e)}
          />
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