
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppContainer, ProfileAside, ProfileContainer } from './UserPanelLayout.styled';
import { Footer, Header } from '../../../Components';
import { ROUTES } from '../../../Constants';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import KeyIcon from '@mui/icons-material/Key';
import { getUsersById } from '../../../Services/Users/getUsersById';



export const UserPanelLayout = () => {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUsersById();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    fetchUserData();
  }, []);

  const { role } = userData;

  if (!role) {
    return <div>You must be logged in to access this page</div>;
  }

  return (
    <AppContainer>
      <Header />
      <div className={'app-container'}>
        <ProfileContainer>
          <ProfileAside>
            <ul>
              <li>
                <Link component="li" to={ROUTES.PROFILE}>
                  <AccountCircleIcon />
                  <span>PROFILE</span>
                </Link>
              </li>
              <li>
                <Link component="li" to={ROUTES.CHANGEPASSWORD}>
                  <KeyIcon />
                  <span>CHANGE PASSWORD</span>
                </Link>
              </li>
              <li>
                <Link component="li" to={ROUTES.FAVORITES}>
                  <FavoriteIcon />
                  <span>FAVORITES</span>
                </Link>
              </li>
              <li>
                <Link component="li" to={ROUTES.APPOINTMENTS}>
                  <CalendarMonthIcon />
                  <span>APPOINTMENTS</span>
                </Link>
              </li>
              <li>
                <Link component="li" to={ROUTES.SEARCHHISTORY}>
                  <ManageSearchIcon />
                  <span>SEARCH HISTORY</span>
                </Link>
              </li>
              {role === 'ADMINISTRATOR' && (
                <li>
                  <Link component="li" to={ROUTES.ADMIN}>
                  <AdminPanelSettingsIcon/>
                    <span>ADMIN DASHBOARD</span>
                  </Link>
                </li>
              )}
            </ul>
          </ProfileAside>
          <Outlet />
        </ProfileContainer>
      </div>
      <Footer />
    </AppContainer>
  );
};


