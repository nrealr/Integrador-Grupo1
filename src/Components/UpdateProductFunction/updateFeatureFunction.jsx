import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const UpdateFeatureFunction = () => {
  const { id } = useParams();
  const [feature, setFeature] = useState({
    name: "",
    icon: null,
  });

  const [base64Image, setBase64Image] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchFeature = async () => {
      try {
        const response = await axios.get(`${SERVER_API}/features/${id}`);
        const featureData = response.data;

        setFeature({
          name: featureData.name,
          icon: null,
        });

        setBase64Image(featureData.icon);
      } catch (error) {
        console.error("Error fetching feature data:", error);
      }
    };

    fetchFeature();
  }, [id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFeature((prevFeature) => ({
      ...prevFeature,
      icon: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", feature.name);
    if (feature.icon) {
      formData.append("icon", feature.icon);
    }

    try {
      await axios.put(`${SERVER_API}/features/update/${id}`, formData, getHeaders());

      setFeature({
        name: "",
        icon: null,
      });
      setError("");
      setSuccess("Feature updated");
    } catch (error) {
      console.error("Error on sending data:", error);
      setError("Error updating feature");
    }
  };

  return (
    <div>
      <form className="update-feature-form" encType="multipart/form-data" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={feature.name}
          onChange={(e) => setFeature({ ...feature, name: e.target.value })}
        />
        <label>Icon:</label>
        {base64Image && (
          <div>
            <img width={100} src={`data:image/jpg;base64,${base64Image}`} alt="Feature Icon" />
          </div>
        )}
        <input type="file" onChange={(e) => handleFileChange(e)} />
        {error && <div className="errorMessages">{error}</div>}
        {success && <div className="successMessage">{success}</div>}

        <button type="submit">Update</button>
      </form>
    </div>
  );
};