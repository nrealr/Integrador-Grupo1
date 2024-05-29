import { Admin } from '../../Routes';
import { AdminDashboard } from './AdminDashboard/AdminDashboard';
import { Outlet } from 'react-router-dom';
import "./AdminLayout.styles.css"

export const AdminLayout = () => {
   
  
    return (
        <div className="admin-layout">
        <div className="admin-sidebar">
          <AdminDashboard />
        </div>
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    );
  };