
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from './Routes/AddProduct'
import Detail from './Routes/Detail'
import { ContextProvider } from './Context';
import { NotFound } from './Routes/notFound/NotFound'
import Home from './Routes/Home/Home';
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

        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/doctor/:id" element={<Detail/>} />
        <Route path="*" element={<NotFound/>}/>

      </Route>
    </Routes>

    </ContextProvider>
    </BrowserRouter>      
  )
}

export default App
