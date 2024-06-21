// components/Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ProfileAside, ProfileContainer } from './UserPanelLayout.styled';
import { Footer, Header } from '../../../Components';
import { ROUTES } from '../../../Constants';


export const UserPanelLayout = () => {
  return (
    <div className={'layout'}>
      <Header />
      <div className={'app-container'}>
        <ProfileContainer>
          <ProfileAside>
            <ul>
              <li>
                <Link component="li" to={ROUTES.PROFILE}>PROFILE</Link>
              </li>
              <li>
                <Link component="li" to={ROUTES.FAVORITES}>FAVORITES</Link>
              </li>
              <li>
                <Link component="li" to={ROUTES.APPOINTMENTS}>APPOINTMENTS</Link>
              </li>
              <li>
                <Link component="li" to={ROUTES.SEARCHHISTORY}>SEARCH HISTORY</Link>
              </li>
              {/* Agregar más opciones de menú aquí */}
            </ul>

          </ProfileAside>
          <Outlet />
        </ProfileContainer>
      </div>
      <Footer />
    </div>
  );
};


