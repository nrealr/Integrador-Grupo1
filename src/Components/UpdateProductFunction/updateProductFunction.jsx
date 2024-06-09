import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_API } from "../../Constants";
import { getDoctorById, getFeatures } from "../../Services";

export const UpdateProductFunction = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    lastname: "",
    rut: "",
    img: null,
    description: "",
    specialtyId: "",
    locationId: "",
    features: []
  });

  const [base64Image, setBase64Image] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [specialties, setSpecialties] = useState([]);
  const [features, setFeatures] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const responseSpecialties = await axios.get(`${SERVER_API}/specialties/list`);
        if (Array.isArray(responseSpecialties.data)) {
          setSpecialties(responseSpecialties.data);
        } else {
          console.error("Specialties response is not an array:", responseSpecialties.data);
          setSpecialties([]);
        }
      } catch (error) {
        console.error("Error fetching specialties:", error);
        setSpecialties([]);
      }
    };

    const fetchFeatures = async () => {
      try {
        const responseFeatures = await getFeatures();
        setFeatures(responseFeatures);
      } catch (error) {
        console.error("Error fetching features:", error);
        setFeatures([]);
      }
    };

    const fetchLocations = async () => {
      try {
        const responseLocations = await axios.get(`${SERVER_API}/locations/list`);
        if (Array.isArray(responseLocations.data)) {
          setLocations(responseLocations.data);
        } else {
          console.error("Locations response is not an array:", responseLocations.data);
          setLocations([]);
        }
      } catch (error) {
        console.error("Error fetching locations:", error);
        setLocations([]);
      }
    };

    const fetchDoctor = async () => {
      try {
        const doctorData = await getDoctorById(id);
        console.log(doctorData); // Verifica la estructura de doctorData
        setProduct({
          name: doctorData.name,
          lastname: doctorData.lastname,
          rut: doctorData.rut,
          img: null,
          description: doctorData.description,
          specialtyId: doctorData.specialtyID,
          locationId: doctorData.locationID,
          features: Array.isArray(doctorData.features) ? doctorData.features.map(f => f.id) : []
        });
        setBase64Image(doctorData.img);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchSpecialties();
    fetchDoctor();
    fetchFeatures();
    fetchLocations();
  }, [id]);

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

    if (!values.img && !base64Image) {
      errors.img = "Image file is mandatory";
    } else if (values.img && !values.img.name.toLowerCase().endsWith(".jpg")) {
      errors.img = "Image file must be a .jpg";
    }

    if (!values.description) {
      errors.description = "Description is mandatory";
    }

    if (!values.specialtyId) {
      errors.specialtyId = "Specialty is mandatory";
    }

    if (!values.locationId) {
      errors.locationId = "Location is mandatory";
    }

    return errors;
  };

  const handleFeatureChange = (featureId) => {
    const updatedFeatures = product.features.includes(featureId)
      ? product.features.filter((id) => id !== featureId)
      : [...product.features, featureId];

    setProduct((prevProduct) => ({
      ...prevProduct,
      features: updatedFeatures,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(product);
    if (Object.keys(validationErrors).length === 0) {
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('lastname', product.lastname);
      formData.append('rut', product.rut);
      if (product.img) {
        formData.append('img', product.img);
      }
      formData.append('description', product.description);
      formData.append('specialtyId', product.specialtyId);
      formData.append('locationId', product.locationId);
      formData.append('featureIds', product.features.join(","));

      try {
        await axios.put(`${SERVER_API}/doctors/update/${id}`, formData, {
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
          locationId: "",
          features: []
        });
        setError("");
        setSuccess("Doctor updated");
      } catch (error) {
        console.error("Error on sending data:", error.response ? error.response.data : error.message);
        setError("Error updating doctor");
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
        {base64Image && (
          <div>
            <img width={100} src={`data:image/jpg;base64,${base64Image}`} alt="Doctor" />
          </div>
        )}
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

        <label>Location:</label>
        <select
          value={product.locationId}
          onChange={(e) => setProduct({ ...product, locationId: e.target.value })}
        >
          <option value="">Select a location</option>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>

        <label>Features:</label>
        {features.map((feature) => (
          <div key={feature.id}>
            <input
              type="checkbox"
              id={feature.id}
              value={feature.id}
              checked={product.features.includes(feature.id)}
              onChange={() => handleFeatureChange(feature.id)}
            />
            <label htmlFor={feature.id}>
              {feature.name}
            </label>
          </div>
        ))}

        {error && (
          <div className="errorMessages">
            {Object.keys(error).map((key) => (
              <p key={key}>{error[key]}</p>
            ))}
          </div>
        )}
        {!error && success && (
          <div className="successMessage">
            <p>{success}</p>
          </div>
        )}

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

