
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import AddProduct from './Routes/AddProduct';
import Detail from './Routes/Detail';
import Home from './Routes/Home';
import Admin from './Routes/Admin';
import { ContextProvider } from './Context';
import { ROUTES } from './Constants';

function App() {


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

export default App
