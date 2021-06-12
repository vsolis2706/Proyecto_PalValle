import {useState, useEffect} from 'react'
import {obtenerProductos} from "../services/productoService"
import MuestraProductos from '../components/MuestraProductos'
import Header from "../components/Header"
function InicioPalValle() {
    
  const [productos, setProductos] = useState ([])
    const getProductos = async () => {
        let productosObtenidos = await obtenerProductos()
        setProductos(productosObtenidos)
        
      }
    
      useEffect(()=>{
        getProductos()
      },[])

    return (
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
         <Header /> 


         <div className="mt-5">
         <h1 className="text-center fw-bold">CATEGORÍAS</h1>
         </div>
        <div className="row">
        <div className="col-md-6 mb-3">
          
        <div className="form-check">
        <label className="form-check-label" for="flexCheckDefault">
        Sistema Digestivo
        </label>
        <input className="form-check-input" type="checkbox"  id="flexCheckDefault" />

    </div>

        </div>
        <div className="col-md-6 mb-3">
        <MuestraProductos productos={productos} categoria="Sistema Digestivo" id_categoria="1"/>
            <MuestraProductos productos={productos} categoria="Sistema Nervioso" id_categoria="2"/> 
        </div>

        </div>

            
        </div>
    )
}

export default InicioPalValle
