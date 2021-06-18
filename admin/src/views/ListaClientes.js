import React, {useState, useEffect} from 'react'
import {obtenerClientes, eliminarCliente} from "../services/clienteService"
import {Link} from "react-router-dom"
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom"
function ListaClientes() {
    const [clientes, setClientes] = useState([])
    let history = useHistory()

    const getClientes = async () => {
        try {
            const clientesNuevos = await obtenerClientes()
            setClientes([...clientesNuevos])
        } catch (error) {
            console.log(error)
        }
    }


    const eliminar=(id) =>{
      Swal.fire({
        icon:'success',
        title:'¿usted desea eliminar?',
        showConfirmButton:true,
        showDenyButton:true,
        confirmButtonText:'si',
        denyButtonText:'no'
      }).then((resultado)=>{
        if(resultado.isConfirmed){

           eliminarCliente(id)
          history.push("/ListaClientes")
        }else if(resultado.isDenied){
          history.push("/ListaClientes")
        }
      })
    }
    useEffect(() => {
        getClientes()
    }, [])
    return (
        <div className="mb-3">
<<<<<<< HEAD
           <h3 className ="mt-4 font-weight-bold text-success">Listar Cliente</h3>
=======
           <h3 className ="mt-4 text-info">Listar Clientes</h3>
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
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
             
<<<<<<< Updated upstream
<<<<<<< HEAD
                    <Link className="btn btn-warning btn-sm mx-2" to={`/editarcliente/${cli.id}`}>
=======
                    <Link className="btn btn-warning btn-sm" to={`/editarcliente/${cli.id}`}>
>>>>>>> Stashed changes
                    <i class="fas fa-edit"></i>
                        </Link>
              <Link className="btn btn-danger btn-sm" to="" onClick={() => eliminar(cli.id)}><i class="fas fa-trash-alt"></i></Link>
                          
              </td>
              
=======
                    <Link className="btn btn-warning btn-sm  mr-1" to={`/editarcliente/${cli.id}`}>
                        Editar
                        </Link>
                     <Link className="btn btn-danger btn-sm" to={`/eliminareliminar/${cli.id}`}>Eliminar</Link>
                          
              </td>
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
            </tr>
          ))}
        </tbody>
      </table>

        </div>
    )
}

export default ListaClientes