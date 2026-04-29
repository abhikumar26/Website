import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Components/Products.jsx'
import ProductDetails from './Components/ProductDetails.jsx';
import Accountdetails from './Components/Accountdetails.jsx';




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='user/:id' element={<ProductDetails />} />
        <Route path='/account' element={<Accountdetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
