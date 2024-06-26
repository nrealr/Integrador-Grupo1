import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../Constants';
import { getFeatures, deleteFeature } from '../../../Services/Features';
import { DeleteProductFunction } from '../../../Components';

export const AdminFeatures = () => {
  const [features, setFeatures] = useState([]);

  const loadFeatures = async () => {
    let featureData = await getFeatures();
    setFeatures(featureData);
  };

  const handleDeleteFeature = async (featureId) => {
    await deleteFeature(featureId);
    loadFeatures();
  };

  useEffect(() => {
    loadFeatures();
  }, []);

  return (
    <div className="admin-display">
      <div className="admin-header">
        <section className="admin-activity">
          <h2>Features list</h2>
          <h4>Last update May 28, 2024 at 2.39 PM</h4>
        </section>
        <section className="admin-user">
          <p>Admin</p>
          <p>👤</p>
        </section>
      </div>
      <div className="admin-action">
        <section className="admin-search-bar">
          <p>🔍</p>
          <p>search placement</p>
        </section>
        <Link to={ROUTES.FEATURESADD}>
          <button className="admin-add-button">Add Feature</button>
        </Link>
      </div>
      <section className="admin-display-table">
        <div className="admin-display-title">
          <p>ID</p>
          <p>NAME</p>
          <p>ICON</p>
          <p>ACTIONS</p>
        </div>
        <div className="admin-display-data">
          {features.map((feature) => (
            <div key={feature.id} className="doctor-api-item">
              <p>{feature.id}</p>
              <p>{feature.name}</p>
              <div>
                {feature.icon ? (
                  <img src={`data:image/jpg;base64,${feature.icon}`} alt={feature.name} className="feature-icon" />
                ) : (
                  'No Icon Available'
                )}
              </div>
              <Link id = {feature.id} to={`/admin/features/update/${feature.id}`}>
            <p className="admin-edit-button">🖊</p>
            </Link>
              <DeleteProductFunction feature={feature} onDelete={() => handleDeleteFeature(feature.id)} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};