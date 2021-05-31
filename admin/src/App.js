import React from 'react'
import ListaProductos from "./views/ListaProductos"
import CrearProducto from "./views/CrearProducto"
import ListaClientes from "./views/ListaClientes"

function App () {
return(
  <div className="container-lg p-5">
    <ListaProductos/>
    <CrearProducto/>
    <ListaClientes/>
  </div>
  )
} 

export default App
