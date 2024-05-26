
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AddProduct} from './Routes/AddProduct';
import {Detail, RegisterForm, Profile, AppointmentList} from './Routes';
import {Home} from './Routes';
import {Admin} from './Routes/AdminPanel/Admin';
import { ContextProvider } from './Context';
import { ROUTES } from './Constants';
import { Layout } from './Components';
import { Container, ThemeProvider } from '@mui/material';
import { theme } from './Themes/theme';




/**
 * 
 * @returns {React.Component} Principal router of the app.
 */
function App() {


  return (
    <ThemeProvider theme={theme} >
      
      <BrowserRouter>
      <ContextProvider>

      <Routes>
        <Route element={<Layout/>}>

          <Route path={ROUTES.HOME} element={<Home/>} />
          <Route path={ROUTES.ADD} element={<AddProduct/>} />
          <Route path={ROUTES.DETAIL} element={<Detail/>} />
          <Route path={ROUTES.ADDUSER} element={<RegisterForm />} />
          <Route path={ROUTES.PROFILE} element={<Profile/>} />
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentList/>} />

        </Route>

        <Route element={<Layout/>}>
          <Route path={ROUTES.ADMIN} element={<Admin/>} />
          <Route path={ROUTES.PROFILE} element={<Profile/>} />
          </Route>
      </Routes>



      </ContextProvider>
      </BrowserRouter> 
      
    </ThemeProvider>
  )
}

export default App;
