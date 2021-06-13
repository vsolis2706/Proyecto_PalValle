import React from 'react'
import './App.css'
import Producto from './components/Producto'
import Navbar from './components/Navbar'
import Productos from './components/Productos'
import CheckoutPage from './components/CheckoutPage'
import CheckoutCard from './components/CheckoutCard'

function App() {
  return (
    <div className="container">
      <Navbar/>
      <CheckoutPage/>
      {/* <CheckoutCard/> */}
      {/* <Productos/> */}
      {/* <Producto/> */}
    </div>
  )
}

export default App


