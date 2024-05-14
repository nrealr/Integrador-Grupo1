import React, { useState, useEffect } from "react";
import "./Detail.style.css";

export const Detail = ({ doctor }) => {

  const [doctors, setDoctor] = useState({});

  useEffect(() => {
    fetch(`${doctor}`)
      .then((response) => response.json())
      .then((data) => setDoctor(data));
  }, [doctor]);

  if (!doctor) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="doctor-info">
      <img src={doctor.image} alt="Foto del doctor" />
      <h2>{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <ul>
        {doctor.qualifications.map((qualification) => (
          <li key={qualification}>{qualification}</li>
        ))}
      </ul>
    </section>
  );
};
