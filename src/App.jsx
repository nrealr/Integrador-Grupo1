
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AddProduct} from './Routes/AddProduct';
import {Detail, RegisterForm, Profile, AppointmentList, ChanguePassword} from './Routes';
import {Home} from './Routes';
import {Admin} from './Routes/AdminPanel/Admin';
import { ContextProvider } from './Context';
import { ROUTES } from './Constants';
import { Layout } from './Components';
import { AdminLayout } from './Components';
import { AdminDoctors } from './Routes/AdminDoctors';
import { Container, ThemeProvider } from '@mui/material';
import { theme } from './Themes/theme';

import { AdminFeatures } from './Routes/AdminFeatures';
import { AdminSpecialties } from './Routes/AdminSpecialties';
import { AddFeature } from './Routes/AddFeature';
import { AddSpecialty } from './Routes/AddSpecialty';
import { UpdateProduct}  from './Routes/UpdateProduct';




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
          <Route path={ROUTES.DETAIL} element={<Detail/>} />
          <Route path={ROUTES.ADDUSER} element={<RegisterForm />} />
          <Route path={ROUTES.PROFILE} element={<Profile/>} />
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentList/>} />
          <Route path={ROUTES.PASSWORD} element={<ChanguePassword/>}/>

          <Route element={<AdminLayout/>}>
            <Route path={ROUTES.ADMIN} element={<Admin/>} />
            <Route path={ROUTES.DOCTORSADD} element={<AddProduct/>} />
            <Route path={ROUTES.DOCTORS} element={<AdminDoctors/>} />
            <Route path={ROUTES.FEATURES} element={<AdminFeatures/>} />
            <Route path={ROUTES.FEATURESADD} element={<AddFeature/>} />
            <Route path={ROUTES.SPECIALTIES} element={<AdminSpecialties/>} />
            <Route path={ROUTES.SPECIALTIESADD} element={<AddSpecialty/>} />
            <Route path={ROUTES.DOCTORSUPDATE} element={<UpdateProduct/>} />

          </Route>

        </Route>


      </Routes>



      </ContextProvider>
      </BrowserRouter> 
      
    </ThemeProvider>
  )
}

export default App;
