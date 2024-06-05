import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../Constants/';
import {DeleteProductFunction} from "../Components"
import { deleteSpecialty, getSpecialties } from '../Services/Specialties';


export const AdminSpecialties = () => {
  const [specialties, setSpecialties] = useState([]);

  const loadSpecialties = async () => {
    let specialtyData = await getSpecialties();
    setSpecialties(specialtyData)
  }

  const handleDeleteSpecialty = async (specialtyId) =>{
    await deleteSpecialty(specialtyId);
    loadSpecialties();
  }


  useEffect(() => {
    loadSpecialties();
  }, []);

  return (

    

    <div className="admin-display">
    <div className="admin-header">
      <section className="admin-activity">
        <h2>Specialties list</h2>
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

      <Link to={ROUTES.SPECIALTIESADD}>
        {" "}
        <button className="admin-add-button">Add Specialty</button>{" "}
      </Link>
    </div>

     <section className="admin-display-table">

    <div className="admin-display-title">
      <p>ID</p>
      <p>NAME</p>
      <p>DESCRIPTION</p>
      <p>ACTIONS</p>
    </div>

    <div className="admin-display-data">
      {specialties.map((specialty) => (
        
        <div key={specialty.id} className="doctor-api-item">
          <p>{specialty.id}</p>
          <p>{specialty.name}</p>
          <p>{specialty.description}</p>
          <Link id = {specialty.id} to={`/admin/specialty/update/${specialty.id}`}>
            <p className="admin-edit-button">🖊</p>
            </Link>
          <DeleteProductFunction specialty = {specialty} onDelete={() => handleDeleteSpecialty(specialty.id)}/>
        </div>

      


      ))}
    </div>

    </section>
  </div>

  )

}