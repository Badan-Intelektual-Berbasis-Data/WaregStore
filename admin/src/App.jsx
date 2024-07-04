import './App.css'
import Product from './pages/Product'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'

function App() {
  

  return (
    
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>


    
  )
}

export default App
