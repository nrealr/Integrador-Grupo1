import React, { useState } from 'react';
import axios from 'axios';

export const ErrorComponent = () => {
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(false);

  const handleFetch = () => {
    axios.get('/api/information')
      .then(response => {
        // Procesar la respuesta y actualizar el estado
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setRetry(true);
      })
      .retry(3) // Reintentar hasta 3 veces
      .then(response => {
        // Procesar la respuesta y actualizar el estado
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setRetry(true);
      });
  };

  const handleRetry = () => {
    setRetry(false);
    handleFetch();
  };

  return (
    <div>
      {error && (
        <div className="error-popup">
          <p>{error}</p>
          <button onClick={handleRetry}>Try Again</button>
        </div>
      )}
    </div>
  );
};
