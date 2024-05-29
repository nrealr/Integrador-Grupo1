import { Admin } from '../../Routes';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminDashboard } from './AdminDashboard/AdminDashboard';
import './AdminLayout.styles.css';

export const AdminLayout = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Check the screen size on initial load
        handleResize();

        // Add event listener to detect screen resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        return (
            <div className="admin-message">
                <h1>Not available on mobile devices or tablets</h1>
            </div>
        );
    }

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
