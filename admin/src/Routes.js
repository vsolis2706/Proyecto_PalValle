import React from 'react'
import {Route} from "react-router-dom"
<<<<<<< HEAD
import ListaProductos from "./views/ListaProductos"
import ListarCategoria from "./views/ListarCategoria"
import ListaClientes from "./views/ListaClientes"
import Home from "./views/Home"
import NoMatch from "./views/NoMatch"
import CrearProducto from "./views/CrearProducto"
import EditarProducto from "./views/EditarProducto"
import CrearCategoria from "./views/CrearCategoria"
import EditarCategoria from "./views/EditarCategoria"
=======
import CrearProducto from "./views/CrearProducto"
import ListaProductos from "./views/ListaProductos"
import EditarProducto from "./views/EditarProducto"
>>>>>>> 1fa6c7c6b714c3a53758dd7c048034a54048e6be

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
