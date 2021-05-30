import React from 'react'
import ListaProductos from "./views/ListaProductos"
import CrearProducto from "./views/CrearProducto"

function App () {
return(
  <div className="container-lg p-5">
    <ListaProductos/>
    <CrearProducto/>
  </div>
  )
} 

export default App