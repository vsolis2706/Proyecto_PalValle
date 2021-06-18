import React, {useState, useEffect} from 'react'
import {obtenerCategorias} from "../services/categoriaService"
import {Link} from "react-router-dom"

const ListarCategoria = () => {

    const [categorias, setCategorias] = useState([])

    const getCategorias = async() =>{
        try {
            let categoriasObtenidas = await obtenerCategorias()
            console.log(categoriasObtenidas);
            setCategorias ([...categoriasObtenidas])
        } catch (error) {
            throw error
        } 
    }
    useEffect(() => {
        getCategorias()
    }, [])


    return (
        <div>      
<<<<<<< HEAD
         <h3 className ="mt-4 font-weight-bold text-success">Listar Categoria</h3>
=======
         <h3 className ="mt-4 text-info">Listar Categoria</h3>
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
           <hr/>
       
        <Link to="/crearcategoria" className="btn btn-primary btn-md my-2">
            Crear Categoria
        </Link>
        <table className="table table-striped table-hover">
        <thead>
            <tr>
               
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {categorias.map((cat, i) => (
                <tr key={i}> 
                
                    <td> {cat.nombre} </td>
                     <td> {cat.descripcion} </td>
                    <td>
<<<<<<< HEAD
                    <Link className="btn btn-warning btn-sm  mx-2" to={`/editarcategoria/${cat.id}`}>
                        <i class="fas fa-edit"></i>
                        </Link>
                    <Link className="btn btn-danger btn-sm" to={`/eliminarcategoria/${cat.id}`}>

                    <i class="fas fa-trash-alt"></i>
                    </Link>
                          
                    </td>
                  
=======
                    <Link className="btn btn-warning btn-sm  mr-1" to={`/editarcategoria/${cat.id}`}>
                        Editar
                        </Link>
                     <Link className="btn btn-danger btn-sm" to={`/eliminarcategoria/${cat.id}`}>Eliminar</Link>
                          
                    </td>
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
                </tr>
            ) )}
        </tbody>

        </table>
    </div>
    )
}

<<<<<<< HEAD
export default ListarCategoria
=======
export default ListarCategoria
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
