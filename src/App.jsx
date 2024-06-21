import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Detail,
  RegisterForm,
  AppointmentList,
  NotFound, Home, LoginPage,
  UserPanelLayout,
  Favorites,
  Admin,
  AdminDoctors,
  AdminFeatures,
  AddFeature,
  UpdateFeature,
  AdminSpecialties,
  AddSpecialty,
  UpdateSpecialty,
  UpdateProduct,
  AddProduct
} from "./Routes";

import { ContextProvider } from "./Context";
import { ROUTES } from "./Constants";
import { Layout, SearchBar, AdminLayout } from "./Components";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Themes/theme";
import SearchResults from "./Routes/SearchResults";
import SearchHistory from "./Routes/Profile/SearchHistory/SearchHistory";
import { Account } from "./Routes/Profile/Account/Account";





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
              <Route path={ROUTES.LOGIN} element={<LoginPage />} />
              <Route path={ROUTES.SEARCH} element={<SearchBar />} />
              <Route path={ROUTES.SEARCHRESULTS} element={<SearchResults />} />
              <Route path="*" element={<NotFound />} />


              <Route element={<AdminLayout />}>
                <Route path={ROUTES.ADMIN} element={<Admin />} />
                <Route path={ROUTES.DOCTORSADD} element={<AddProduct/>} />
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
                <Route
                  path={ROUTES.SPECIALTIESUPDATE}
                  element={<UpdateSpecialty />}
                />
                <Route path={ROUTES.LOGOUT} element={<handleLogout />} />
                <Route path={ROUTES.DOCTORSUPDATE} element={<UpdateProduct />} />
              </Route>

            </Route>

            <Route element={<UserPanelLayout />}>
              <Route path={ROUTES.PROFILE} element={<Account />} />
              <Route path={ROUTES.APPOINTMENTS} element={<AppointmentList />} />
              <Route path={ROUTES.FAVORITES} element={<Favorites />} />
              <Route path={ROUTES.SEARCHHISTORY} element={<SearchHistory />} />
            </Route>
          </Routes>


        </ContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
