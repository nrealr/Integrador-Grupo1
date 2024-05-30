import axios from "axios";
import React, { useState } from "react";
import { SERVER_API } from "../../Constants";

export const AddFeatureFunction = () => {
  const [feature, setFeature] = useState({
    name: "",
    icon: null,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFeature((prevFeature) => ({
      ...prevFeature,
      icon: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", feature.name);
      formData.append("icon", feature.icon);

      const response = await axios.post(`${SERVER_API}/features/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

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
  };

  return (
    <div>
      <form
        className="add-product-form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <label>Name:</label>
        <input
          type="text"
          value={feature.name}
          onChange={(e) => setFeature({ ...feature, name: e.target.value })}
        />
        <label>Icon:</label>
        <input type="file" onChange={(e) => handleFileChange(e)} />
        {error && <div className="errorMessages">{error}</div>}
        {success && <div className="successMessage">{success}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};