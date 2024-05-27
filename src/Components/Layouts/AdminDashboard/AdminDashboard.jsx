import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../Constants';
import './AdminDashboard.styles.css'

export const AdminDashboard = () => {


return (

    
    <div className="admin-panel">

<div className="admin-select">
  <h2>MediTrack</h2>

  <section className="admin-select-option">
    <div className="admin-options"> 
        <Link to={ROUTES.ADMIN}>
            <p>📝</p>
            <p>Dashboard</p>
        </Link>
    </div>
    
    <div className="admin-options">
        <Link to={ROUTES.DOCTORS}>
            <p>🥼</p>
            <p>Doctors</p>
        </Link>
    </div>



    <div> 
      <p>🤒</p>
      <p>Patients</p>
    </div>

    <div> 
      <p>📆</p>
      <p>Appointments</p>
    </div>

    <div> 
      <p>🔔</p>
      <p>Reminders</p>
    </div>

    <div> 
      <p>⭐</p>
      <p>Features</p>
    </div>

    <div> 
      <p>🩺</p>
      <p>Specialties</p>
    </div>

    <div> 
      <p>💨</p>
      <p>Log Out</p>
    </div>




  </section>
</div>
</div>
)

}