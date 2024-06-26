import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../Constants';
import { getDoctors, deleteDoctor } from '../../../Services';
import {DeleteProductFunction} from "../../../Components"


export const AdminDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  const loadDoctors = async () => {
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

    

    <div className="admin-display">
    <div className="admin-header">
      <section className="admin-activity">
        <h2>Doctor list</h2>
        <h4>Last update May 13, 2024 at 2.39 PM</h4>
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

      <Link to={ROUTES.DOCTORSADD}>
        {" "}
        <button className="admin-add-button">Add Doctor</button>{" "}
      </Link>
    </div>

     <section className="admin-display-table">

    <div className="admin-display-title">
      <p>ID</p>
      <p>NAME</p>
      <p>LASTNAME</p>
      <p>RUT</p>
      <p>SPECIALIZATION</p>
      <p>ACTIONS</p>
    </div>

    {/* 
    <div className="admin-display-data">
      {doctors.map((doctor) => (
        
        <div key={doctor} className="doctor-api-item">
          <p>{doctor.id}</p>
          <p>{doctor.name}</p>
          <p>{doctor.lastname}</p>
          <p>{doctor.rut}</p>
          <p>Doctor</p>
          <Link id = {doctor.id} to={`/admin/doctors/update/${doctor.id}`}>
            <p className="admin-edit-button">🖊</p>
            </Link>
          <DeleteProductFunction doctor = {doctor} onDelete={() => handleDeleteDoctor(doctor.id)}/>
        </div>  
      ))}
    </div> */}

<div className="admin-display-data">
  {doctors.map((doctor) => (
    <div key={doctor.id} className="doctor-api-item">
      <p>{doctor.id}</p>
      <p>{doctor.name}</p>
      <p>{doctor.lastname}</p>
      <p>{doctor.rut}</p>
      <p>Doctor</p>
      <Link id={doctor.id} to={`/admin/doctors/update/${doctor.id}`}>
        <p className="admin-edit-button">🖊</p>
      </Link>
      <DeleteProductFunction doctor={doctor} onDelete={() => handleDeleteDoctor(doctor.id)} />
    </div>
  ))}
</div>

    </section>
  </div>

  )

}




