import React from 'react'

function FormDetalleVenta({detalle}) {
      return (
        <table className="table">
        <thead>
                <tr>
                   
                    <th>Código</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    
                </tr>
        </thead>
        <tbody>
      {detalle
      .map((det, i) => (
         
        <tr key={i}>
          <td>{det.id}</td>   
          <td>{det.nombre}</td>    
          <td>{det.cantidad}</td>
          <td>{det.precio}</td>
        </tr>
      ))}
    </tbody>
       </table>
    )
}

<<<<<<< HEAD
export default FormDetalleVenta
=======
export default FormDetalleVenta
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
