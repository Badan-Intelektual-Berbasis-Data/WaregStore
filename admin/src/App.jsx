import './App.css'
import Product from './pages/Product'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Buyer from './pages/Buyer'

function App() {
  

  return (
    
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="buyer" element={<Buyer />} />

        </Route>
      </Routes>
    </BrowserRouter>


    
  )
}

export default App
