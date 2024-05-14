
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AddProduct} from './Routes/AddProduct';
import {Detail} from './Routes';
import {Home} from './Routes';
import {Admin} from './Routes/Admin';
import { ContextProvider } from './Context';
import { ROUTES } from './Constants';
import { Layout } from './Components';


/**
 * 
 * @returns {React.Component} Principal router of the app.
 */
function App() {

  <h1>hola</h1>

  return (
    <BrowserRouter>
    <ContextProvider>

    <Routes>
      <Route element={<Layout/>}>

        <Route path={ROUTES.HOME} element={<Home/>} />
        <Route path={ROUTES.ADMIN} element={<Admin/>} />
        <Route path={ROUTES.ADD} element={<AddProduct/>} />
        <Route path={ROUTES.DETAIL} element={<Detail/>} />

      </Route>
    </Routes>

    </ContextProvider>
    </BrowserRouter>      
  )
}

export default App;
