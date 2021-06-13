import {useState, useEffect} from 'react'
import {obtenerProductos} from "../services/productoService"
import Productos from '../components/Productos'
import Header from "../components/Header"
import foto1 from "../assets/foto01.jpg"
import foto2 from "../assets/foto02.jpg"
import foto3 from "../assets/foto03.jpg"
import foto4 from "../assets/foto04.jpg"

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
        <div classNameName="row">
        <div classNameName="col-md-6 mb-3">
        <br/>

        {/* Tarjeta */}
        <div className="d-flex">
        {/* Parte superior de la tarjeta 01 */}
        <div className="card">
        <div className="card-imagen">
          <img src={foto1} alt="Sistema Digestivo" />
          
        </div>
        {/* Parte inferior de la tarjeta 01*/}
        <div className="card-info">
          <h3>Sistema Digestivo</h3>
          <div className="button-cat">
            <a href="#"></a>
            <button type="button" className="btn btn-outline-success">
              <span className="tag-button">VER PRODUCTOS</span>
            </button>
          </div>
        </div>
      </div>
      {/* Parte superior de la tarjeta 02 */}
      <div className="card">
        <div className="card-imagen">
          <img src={foto2} alt="Sistema Nervioso" />
        </div>
        {/* Parte inferior de la tarjeta 02 */}
        <div className="card-info">
          <h3>Sistema Nervioso</h3>
          <div className="button-cat">
            <a href="#"></a>
            <button type="button" className="btn btn-outline-success">
              <span className="tag-button">VER PRODUCTOS</span>
            </button>
          </div>
        </div>
      </div>
      {/* Parte superior de la tarjeta 03 */}
      <div className="card">
        <div className="card-imagen">
          <img src={foto3} alt="Cocina Natural" />
          
        </div>
        {/* Parte inferior de la tarjeta 03 */}
        <div className="card-info">
          <h3>Cocina Natural</h3>
          <div className="button-cat">
            <a href="#"></a>
            <button type="button" className="btn btn-outline-success">
              <span className="tag-button">VER PRODUCTOS</span>
            </button>
          </div>
        </div>
      </div>
      {/* Parte superior de la tarjeta 04 */}
      <div className="card">
        <div className="card-imagen">
          <img src={foto4} alt="Peso/Grasa" />
          
        </div>
        {/* Parte inferior de la tarjeta 04 */}
        <div className="card-info">
          <h3>Peso/Grasa</h3>
          <div className="button-cat">
            <a href="#"></a>
            <button type="button" className="btn btn-outline-success">
              <span className="tag-button">VER PRODUCTOS</span>
            </button>
          </div>
        </div>
      </div>
      </div>
      {/* Fin Tarjeta */}
          
        <div classNameName="form-check">
        <label classNameName="form-check-label" for="flexCheckDefault">
        Sistema Digestivo
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
