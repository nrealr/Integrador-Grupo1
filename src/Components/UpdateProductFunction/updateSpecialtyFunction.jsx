import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const UpdateSpecialtyFunction = () => {
  const { id } = useParams();
  const [specialty, setSpecialty] = useState({
    name: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchsSecialty = async () => {
      try {
        const response = await axios.get(`${SERVER_API}/specialties/${id}`);
        const specialtyData = response.data;

        setSpecialty({
          name: specialtyData.name,
          description: specialtyData.description,
        });

      } catch (error) {
        console.error("Error fetching specialty data:", error);
      }
    };

    fetchsSecialty();
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", specialty.name);
    formData.append("description", specialty.description);

    try {
      await axios.put(`${SERVER_API}/specialties/update/${id}`, formData, getHeaders());

      setSpecialty({
        name: "",
        description: "",
      });
      setError("");
      setSuccess("Specialty updated");
    } catch (error) {
      console.error("Error on sending data:", error);
      setError("Error updating specialty");
    }
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
          onChange={(e) => setSpecialty({ ...specialty, description: e.target.value })}
        />
       
        {error && <div className="errorMessages">{error}</div>}
        {success && <div className="successMessage">{success}</div>}

        <button type="submit">Update</button>
      </form>
    </div>
  );
};