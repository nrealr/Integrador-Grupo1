// components/Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ProfileAside, ProfileContainer } from './UserPanelLayout.styled';
import { Footer, Header } from '../../../Components';
import { ROUTES } from '../../../Constants';


export const UserPanelLayout = () => {
  return (
    <div className={'layout'}>
      <Header/>
      <div className={'app-container'}>
        <ProfileContainer>
          <ProfileAside>
          
            <ul>
              <li>
                <Link to={ROUTES.PROFILE}>Account</Link>
              </li>
              <li>
                <Link to={ROUTES.PASSWORD}>Password</Link>
              </li>
              <li>
                <Link to={ROUTES.APPOINTMENTS}>My Appointments</Link>
              </li>
              <li>
                <Link to={ROUTES.SEARCHHISTORY}>Search History</Link>
              </li>
              {/* Agregar más opciones de menú aquí */}
            </ul>
          </ProfileAside>
          <Outlet />
        </ProfileContainer>
      </div>
      <Footer/>
    </div>
  );
};


