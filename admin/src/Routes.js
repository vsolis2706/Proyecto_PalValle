import React from 'react'
import {Route} from "react-router-dom"

import ListarCategoria from "./views/ListarCategoria"
import ListaClientes from "./views/ListaClientes"
import Home from "./views/Home"
import NoMatch from "./views/NoMatch"
import CrearProducto from "./views/CrearProducto"
import EditarProducto from "./views/EditarProducto"
import CrearCategoria from "./views/CrearCategoria"
import EditarCategoria from "./views/EditarCategoria"
import ListaProductos from "./views/ListaProductos"
//ok
function Routes() {
    return (
        <div>
         <Route exact path="/home" component={Home}/>   
         <Route exact path="/ListaProductos" component={ListaProductos}/> 
         <Route exact path="/crearproducto" component={CrearProducto}/>    
         <Route exact path="/editarproducto/:id" component={EditarProducto}/> 
         <Route exact path="/ListarCategoria" component={ListarCategoria}/>   
         <Route exact path="/crearcategoria" component={CrearCategoria}/>  
         <Route exact path="/editarcategoria/:id" component={EditarCategoria}/>  
         <Route exact path="/ListaClientes" component={ListaClientes}/>   
         <Route component = {NoMatch} />
        </div>
    )
}

export default Routes
