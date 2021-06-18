import {useState, useEffect} from 'react'
import {obtenerProductos} from "../services/productoService"
<<<<<<< HEAD
import Productos from '../components/Productos'
import Header from "../components/Header"
// import Cards from '../components/Cards'
import CategoriesCarousel from '../components/CategoriesCarousel'
import GroupCategories from '../components/GroupCategories'


=======
import MuestraProductos from '../components/MuestraProductos'
import Header from "../components/Header"
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
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
<<<<<<< HEAD
         <Header />
         <div classNameName="mt-5">
            <h1 classNameName="text-center fw-bold">Los más vendidos</h1>
         </div>
         {/* <Cards/> */}
          <CategoriesCarousel/>
          <br/>
          <div classNameName="mt-5">
            <h1 classNameName="text-center fw-bold">CATEGORÍAS</h1>
         </div>
        <div classNameName="row">
            <div classNameName="col-md-6 mb-3">
        <br/>
        <GroupCategories/>
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
=======
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
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
        </div>

        </div>

            
        </div>
    )
}

export default InicioPalValle
