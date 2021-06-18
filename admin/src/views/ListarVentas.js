import React, { useState, useEffect } from 'react'
import {obtenerFacturacion} from "../services/ventaService"
<<<<<<< HEAD

=======
import * as moment from 'moment'
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
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
<<<<<<< HEAD
           <h3 className ="mt-4 font-weight-bold text-success">Listar Ventas</h3>
=======
           <h3 className ="mt-4 text-info">Listar Ventas</h3>
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
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
<<<<<<< HEAD
                <Link className="btn btn-info btn-sm mx-2" to={`/detalleventa/${vent.id}`}>
                <i class="far fa-eye"></i>
                </Link> 
               
                <Link  className="btn btn-danger btn-sm" to={`/anularventa/${vent.id}`}>
                <i class="fas fa-ban"></i>
=======
                <Link className="btn btn-info btn-sm mr-2" to={`/detalleventa/${vent.id}`}>
                  Ver detalle
                </Link>
                <Link className="btn btn-danger btn-sm" to={`/anularventa/${vent.id}`}>
                  Anular
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
           </table>

        </div>
    )
}

<<<<<<< HEAD
export default ListarVentas
=======
export default ListarVentas
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
