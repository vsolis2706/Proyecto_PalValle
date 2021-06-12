import React from 'react'
import './App.css'
import Producto from './components/Producto'
import Navbar from './components/Navbar'
import Productos from './components/Productos'

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Productos/>
      {/* <Producto/> */}
    </div>
  )
}

export default App


