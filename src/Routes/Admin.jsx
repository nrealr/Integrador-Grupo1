import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../Constants/';
import { getDoctors } from '../Services';
import "./Admin.styles.css"

export const Admin = () => {
  const [doctors, setDoctors] = useState([]);

  const loadDoctors = async ()=>{
    let doctorData = await getDoctors();
    setDoctors(doctorData)
  }


  useEffect(() => {
    loadDoctors();
  }, []);

  return (
    <div className='admin-panel'>
      <h1>Welcome to admin panel</h1>

      <Link to={ROUTES.ADD}>
        {" "}
        <button className="admin-add-button">Add product</button>{" "}
      </Link>

      <div className="grid-container">
        {doctors.map((item) => (
          <div key={item.id} className="grid-item">
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Last Name: {item.lastname}</p>
            <p>Rut: {item.rut}</p>
            {/*             <p>Descripción: {item.descripcion}</p>
             */}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
