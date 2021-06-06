import React from 'react'
import {Route} from "react-router-dom"
import CrearProducto from "./views/CrearProducto"
import ListaProductos from "./views/ListaProductos"
import EditarProducto from "./views/EditarProducto"

function Routes() {
    return (
        <div>
           <Route exact path="/listadeproductos" component={ListaProductos}/>
           <Route exact path="/crearproducto" component={CrearProducto}/>
           <Route exact path="/editarproducto/:id" component={EditarProducto}/>
        </div>
    )
}

export default Routes
