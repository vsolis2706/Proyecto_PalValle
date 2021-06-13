import {Route} from "react-router-dom"
import InicioPalValle from "./views/InicioPalValle"
import DetalleProducto from "./views/DetalleProducto"

function Routes() {
    return (
        <div>
           <Route path="/PalValle" exact component={InicioPalValle}/>
           <Route path="/detalleproducto/:id" component={DetalleProducto}/>
        </div>
    )
}

export default Routes
