import {Route} from "react-router-dom"
import InicioPalValle from "./views/InicioPalValle"
import DetalleProducto from "./views/DetalleProducto"
import Login from "./components/Login/Login"
function Routes() {
    return (
        <div>
           <Route path="/PalValle" exact component={InicioPalValle}/>
           <Route path="/detalleproducto/:id" component={DetalleProducto}/>
           <Route path="/login" component={Login}/>
        </div>
    )
}

export default Routes
