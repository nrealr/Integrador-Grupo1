import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../Constants/';
import { getDoctors, deleteDoctor } from '../Services';
import {DeleteProductFunction} from "../Components"
import "./Admin.styles.css"

export const Admin = () => {
  const [doctors, setDoctors] = useState([]);

  const loadDoctors = async ()=>{
    let doctorData = await getDoctors();
    setDoctors(doctorData)
  }

  const handleDeleteDoctor = async (doctorId) =>{
    await deleteDoctor(doctorId);
    loadDoctors();
  }


  useEffect(() => {
    loadDoctors();
  }, []);

  return (
    <div>
      <h1>Welcome to admin panel</h1>

      <Link to={ROUTES.ADD}>
        {" "}
        <button className="admin-add-button">Add product</button>{" "}
      </Link>

      <div className="grid-container">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="grid-item">
            <p>ID: {doctor.id}</p>
            <p>Name: {doctor.name}</p>
            <p>Last Name: {doctor.lastname}</p>
            <p>Rut: {doctor.rut}</p>
            <DeleteProductFunction doctor = {doctor} onDelete={() => handleDeleteDoctor(doctor.id)}/>
            {/*             <p>Descripción: {item.descripcion}</p>
             */}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
