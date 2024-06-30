// import React, { useEffect, useState } from "react";
// import { Link, Router } from "react-router-dom";
// import { ROUTES } from "../../../Constants";
// import "./AdminDashboard.styles.css";
// import { handleLogout } from "../../../Utils";

// export const AdminDashboard = () => {
//   return (
//     <div className="admin-panel">
//       <div className="admin-select">
//         <h2>MediTrack</h2>

//         <section className="admin-select-option">
//           <div className="admin-options">
//             <Link to={ROUTES.ADMIN}>
//               <p>📝</p>
//               <p>Dashboard</p>
//             </Link>
//           </div>

//           <div className="admin-options">
//             <Link to={ROUTES.DOCTORS}>
//               <p>🥼</p>
//               <p>Doctors</p>
//             </Link>
//           </div>

//           <div className="admin-options">
//             <Link to={ROUTES.USERS}>
//               <p>👥</p>
//               <p>Users</p>
//             </Link>
//           </div>


//           <div className="admin-options">
//             <Link to={ROUTES.FEATURES}>
//               <p>⭐</p>
//               <p>Features</p>
//             </Link>
//           </div>

//           <div className="admin-options">
//             <Link to={ROUTES.SPECIALTIES}>
//               <p>🩺</p>
//               <p>Specialties</p>
//             </Link>
//           </div>

//           <div className="admin-options">
//             <Link>
//               <p>💨</p>
//               <p onClick={handleLogout}>Log Out</p>
//             </Link>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };
import { ROUTES } from '../../../Constants';
import { handleLogout } from '../../../Utils';
import { AdminOptions } from './AdminDashboard.styled';
import { AdminLink } from './AdminDashboard.styled';
import { AdminSelectOption } from './AdminDashboard.styled';
import { AdminSelect } from './AdminDashboard.styled';
import { AdminPanel } from './AdminDashboard.styled';


export const AdminDashboard = () => {
  return (
    <AdminPanel>
      <AdminSelect>
        <h2>MediTrack</h2>
        <AdminSelectOption>
          <AdminOptions>
            <AdminLink to={ROUTES.ADMIN}>
              <p>📝</p>
              <p>Dashboard</p>
            </AdminLink>
          </AdminOptions>

          <AdminOptions>
            <AdminLink to={ROUTES.DOCTORS}>
              <p>🥼</p>
              <p>Doctors</p>
            </AdminLink>
          </AdminOptions>

          <AdminOptions>
            <AdminLink to={ROUTES.USERS}>
              <p>👥</p>
              <p>Users</p>
            </AdminLink>
          </AdminOptions>

          <AdminOptions>
            <AdminLink to={ROUTES.FEATURES}>
              <p>⭐</p>
              <p>Features</p>
            </AdminLink>
          </AdminOptions>

          <AdminOptions>
            <AdminLink to={ROUTES.SPECIALTIES}>
              <p>🩺</p>
              <p>Specialties</p>
            </AdminLink>
          </AdminOptions>

          <AdminOptions>
            <AdminLink>
              <p>💨</p>
              <p onClick={handleLogout}>Log Out</p>
            </AdminLink>
          </AdminOptions>
        </AdminSelectOption>
      </AdminSelect>
    </AdminPanel>
  );
};