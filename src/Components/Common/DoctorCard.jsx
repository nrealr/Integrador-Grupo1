import React from 'react';
import { Link } from 'react-router-dom';
import "./DoctorCard.styles.css";


const DoctorCard = ({ doctor }) => {
  return (
    <div>
        
    <div className='container'>
        
      <img className='avatarDoc'
        src={doctor.img}
      />

      <h2>{doctor.nombre} {doctor.apellido}</h2>
      <h3>{doctor.rut}</h3>

      <Link to={`/doctor/${doctor.id}`}>Ver detalle</Link>

    </div>

    </div>
  );
};

export default DoctorCard;