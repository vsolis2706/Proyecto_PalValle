import {useState, useEffect} from 'react'
import {obtenerProductos} from "../services/productoService"
import MuestraProductos from '../components/MuestraProductos'
import InicioCarousel from '../components/InicioCarousel'

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
            <InicioCarousel/>
            <MuestraProductos productos={productos} categoria="Frutas Secas" id_categoria="1"/>
            <MuestraProductos productos={productos} categoria="Yogures" id_categoria="2"/>
        </div>
    )
}

export default InicioPalValle
