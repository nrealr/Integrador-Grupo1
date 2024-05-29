import React, { useEffect, useState } from "react";
import { Link, Router } from "react-router-dom";
import { ROUTES } from "../../../Constants";
import "./AdminDashboard.styles.css";

export const AdminDashboard = () => {
  const logOut = () => {
    const token = localStorage.getItem("token"); // o sessionStorage, dependiendo de dónde almacenes el token
    if (token) {
      logout(token);
    } else {
      console.error("No token found");
      // Opcional: Redirigir a la página de inicio de sesión si no hay token
      history.push("localhost:5173/"); // o navigate('/login') si usas react-router-dom v6
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminar el token del almacenamiento local
    window.location.href = "localhost:5173"; // Redireccionar al usuario a la página principal
  };
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

          <div className="admin-options">
            <Link to={ROUTES.FEATURES}>
              <p>⭐</p>
              <p>Features</p>
            </Link>
          </div>

          <div className="admin-options">
            <Link to={ROUTES.SPECIALTIES}>
              <p>🩺</p>
              <p>Specialties</p>
            </Link>
          </div>

          <div className="admin-options">
            <Link to={ROUTES.HOME}>
              <p>💨</p>
              <p onClick={logOut}>Log Out</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
