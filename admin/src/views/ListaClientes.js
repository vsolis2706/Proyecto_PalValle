import React, {useState, useEffect} from 'react'
import {obtenerClientes} from "../services/clienteService"
import {Link} from "react-router-dom"

function ListaClientes() {
    const [clientes, setClientes] = useState([])
    
    const getClientes = async () => {
        try {
            const clientesNuevos = await obtenerClientes()
            setClientes([...clientesNuevos])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getClientes()
    }, [])
    return (
        <div className="mb-3">
           <h3 className ="mt-4 text-info">Listar Clientes</h3>
           <hr/>
           <Link to='/crearCliente' className="btn btn-primary btn-md my-2">
           Crear Cliente
           </Link>
           <table className="table">
        <thead>
          <tr>
            <th>Número</th>
            <th>Apellidos</th>
            <th>Nombres</th>
            <th>Email</th>
            <th>DNI</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cli, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{cli.Apellidos}</td>
              <td>{cli.Nombres}</td>
              <td>{cli.email}</td>
              <td>{cli.dni}</td>
              <td>{cli.telefono}</td>
              <td>
             
                    <Link className="btn btn-warning btn-sm  mr-1" to={`/editarcliente/${cli.id}`}>
                        Editar
                        </Link>
                     <Link className="btn btn-danger btn-sm" to={`/eliminareliminar/${cli.id}`}>Eliminar</Link>
                          
              </td>
            </tr>
          ))}
        </tbody>
      </table>

        </div>
    )
}

export default ListaClientes