import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddProduct } from "./Routes/AddProduct";
import {
  Detail,
  RegisterForm,
  Profile,
  AppointmentList,
  ChanguePassword,
  NotFound, Home
} from "./Routes";
import { Admin } from "./Routes/AdminPanel/Admin";
import { AdminFeatures } from "./Routes/AdminFeatures";
import { AdminSpecialties } from "./Routes/AdminSpecialties";
import { AddFeature } from "./Routes/AddFeature";
import { AddSpecialty } from "./Routes/AddSpecialty";
import { UpdateProduct}  from './Routes/UpdateProduct';
import { UpdateFeature } from "./Routes/UpdateFeature";
import { AdminDoctors } from "./Routes/AdminDoctors";
import { ContextProvider } from "./Context";
import { ROUTES } from "./Constants";
import { Layout, SearchBar, AdminLayout } from "./Components";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Themes/theme";






/**
 *
 * @returns {React.Component} Principal router of the app.
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.DETAIL} element={<Detail />} />
              <Route path={ROUTES.ADDUSER} element={<RegisterForm />} />
              <Route path={ROUTES.PROFILE} element={<Profile />} />
              <Route path={ROUTES.APPOINTMENTS} element={<AppointmentList />} />
              <Route path={ROUTES.PASSWORD} element={<ChanguePassword />} />
              <Route path={ROUTES.SEARCH} element={<SearchBar/>}/>
              <Route path="*" element={<NotFound/>}/>
  

              <Route element={<AdminLayout />}>
                <Route path={ROUTES.ADMIN} element={<Admin />} />
                <Route path={ROUTES.DOCTORSADD} element={<AddProduct />} />
                <Route path={ROUTES.DOCTORS} element={<AdminDoctors />} />
                <Route path={ROUTES.FEATURES} element={<AdminFeatures />} />
                <Route path={ROUTES.FEATURESADD} element={<AddFeature />} />
                <Route path={ROUTES.FEATURESUPDATE} element={<UpdateFeature />} />
                <Route
                  path={ROUTES.SPECIALTIES}
                  element={<AdminSpecialties />}
                />
                <Route
                  path={ROUTES.SPECIALTIESADD}
                  element={<AddSpecialty />}
                />
                <Route path={ROUTES.LOGOUT} element={<handleLogout />} />
                <Route path={ROUTES.DOCTORSUPDATE} element={<UpdateProduct/>} />

          </Route>
            </Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
