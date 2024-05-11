
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import AddProduct from './Routes/AddProduct'
import Detail from './Routes/Detail'
import Home from './Routes/Home'
import { ContextProvider } from './Context';

function App() {


  return (
    <BrowserRouter>
    <ContextProvider>

    <Routes>
      <Route element={<Layout/>}>

        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/doctor/:id" element={<Detail/>} />

      </Route>
    </Routes>

    </ContextProvider>
    </BrowserRouter>      
  )
}

export default App
