
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import AddProduct from './Routes/AddProduct'
import Detail from './Routes/Detail'
import Home from './Routes/Home'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>

        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/doctor/:id" element={<Detail/>} />

      </Route>
    </Routes>
    </BrowserRouter>      
  )
}

export default App
