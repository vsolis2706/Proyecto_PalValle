import {useState, useEffect} from 'react'
import {obtenerProductos} from "../services/productoService"
import Productos from '../components/Productos'
import Header from "../components/Header"
import Cards from '../components/Cards'


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
         <Header />
         <div classNameName="mt-5">
            <h1 classNameName="text-center fw-bold">CATEGORÍAS</h1>
         </div>
         <Cards/>
        <div classNameName="row">
            <div classNameName="col-md-6 mb-3">
        <br/>
            <div classNameName="form-check">
              <label classNameName="form-check-label" for="flexCheckDefault">
                  istema Digestivo
              </label>
              <input classNameName="form-check-input" type="checkbox"  id="flexCheckDefault" />

            </div>
          </div>
        <div classNameName="col-md-6 mb-3">
        <Productos productos={productos} categoria="Sistema Digestivo" id_categoria="1"/>
            <Productos productos={productos} categoria="Sistema Nervioso" id_categoria="2"/> 
        </div>

        </div>

            
        </div>
    )
}

export default InicioPalValle
