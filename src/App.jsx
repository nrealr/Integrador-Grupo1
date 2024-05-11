
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import AddProduct from './Routes/AddProduct'
import Detail from './Routes/Detail'
import Home from './Routes/Home'
import { ContextProvider } from './Components/utils/global.context'
import { routes } from './Components/utils/routes'
import Admin from './Routes/Admin'

function App() {


  return (
    <BrowserRouter>
    <ContextProvider>

    <Routes>
      <Route element={<Layout/>}>

        <Route path={routes.home} element={<Home/>} />
        <Route path={routes.admin} element={<Admin/>} />
        <Route path={routes.add} element={<AddProduct/>} />
        <Route path={routes.detail} element={<Detail/>} />

      </Route>
    </Routes>

    </ContextProvider>
    </BrowserRouter>      
  )
}

export default App
