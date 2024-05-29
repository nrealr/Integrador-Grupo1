import axios from "axios";
import React, { useState } from "react";
import { SERVER_API } from "../../Constants";
import { addSpecialty } from "../../Services";

export const AddSpecialtyFunction = () => {
  const [specialty, setSpecialty] = useState({
    name: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateForm = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Name field is mandatory";
    }

    if (!values.description) {
      errors.description = "Description is mandatory";
    }

    return errors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(specialty);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await addSpecialty(specialty);
        setSpecialty({
          name: "",
          description: "",
        });
        setError("");
        setSuccess("Specialty added");
      } catch (error) {
        console.error("Error on sending data:", error);
        setError("Error adding specialty");
      }
    } else {
      setError(validationErrors);
    }

    console.log(specialty);
  };

  return (
    <div>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={specialty.name}
          onChange={(e) => setSpecialty({ ...specialty, name: e.target.value })}
        />
        <label>Description:</label>
        <input
          type="text"
          value={specialty.description}
          onChange={(e) =>
            setSpecialty({ ...specialty, description: e.target.value })
          }
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