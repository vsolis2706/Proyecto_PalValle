import React, { useState, useEffect } from 'react'
import {obtenerFacturacion} from "../services/ventaService"
import * as moment from 'moment'
import {Link} from "react-router-dom"

function ListarVentas() {

   const [venta, setVentas] = useState([])
  
   
   const getVentas = async() =>{
        try {
            const ventasObtenidas = await obtenerFacturacion();
            setVentas(ventasObtenidas) 
        } catch (error) {
            console.log(error)
        }
   }

   


   useEffect(() => {
      getVentas()
     
  }, []);

    return (
        <div className="m-3">
           <h3 className ="mt-4 text-info">Listar Ventas</h3>
           <table className="table">
            <thead>
                    <tr>
                       
                        <th>Código</th>
                        <th>Fecha</th>
                        <th>Precio Total</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
            </thead>
            <tbody>
          {venta.map((vent, i) => (
            <tr key={i}>
            
              <td>{vent.id}</td>              
              <td>{new Date(vent.fecha).toLocaleDateString('en-GB')} </td>
              <td>{vent.precio_total}</td>
              <td>{vent.estado}</td>
              <td>
                <Link className="btn btn-info btn-sm mr-2" to={`/detalleventa/${vent.id}`}>
                  Ver detalle
                </Link>
                <Link className="btn btn-danger btn-sm" to={`/anularventa/${vent.id}`}>
                  Anular
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
           </table>

        </div>
    )
}

export default ListarVentas