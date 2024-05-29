
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AddProduct} from './Routes/AddProduct';
import {Detail, RegisterForm, Profile, AppointmentList} from './Routes';
import {Home} from './Routes';
import {Admin} from './Routes/AdminPanel/Admin';
import { ContextProvider } from './Context';
import { ROUTES } from './Constants';
import { Layout } from './Components';
import { AdminLayout } from './Components';
import { AdminDoctors } from './Routes/AdminDoctors';
import { Container, ThemeProvider } from '@mui/material';
import { theme } from './Themes/theme';
import { Password } from '@mui/icons-material';
import { AdminFeatures } from './Routes/AdminFeatures';




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
          <Route path={ROUTES.PASSWORD} element={<Password/>}/>

          <Route element={<AdminLayout/>}>
            <Route path={ROUTES.ADMIN} element={<Admin/>} />
            <Route path={ROUTES.DOCTORSADD} element={<AddProduct/>} />
            <Route path={ROUTES.DOCTORS} element={<AdminDoctors/>} />
            <Route path={ROUTES.FEATURES} element={<AdminFeatures/>} />
          </Route>

        </Route>


      </Routes>



      </ContextProvider>
      </BrowserRouter> 
      
    </ThemeProvider>
  )
}

export default App;
