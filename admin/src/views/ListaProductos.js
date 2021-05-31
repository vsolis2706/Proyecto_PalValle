import React, {useState, useEffect} from 'react'
import {obtenerProducto} from "../services/productoService"

function ListaProductos() {
    const [productos, setProductos] = useState([])

    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProducto()
            setProductos(productosObtenidos)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProductos()
    }, [])
    return (
        <div>
            <h1>Productos</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Fecha de vencimiento</th>
                        <th>Foto</th>
                        <th>Categoria</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod, i) => (
                        <tr key= {i}>
                            <td>{prod.id}</td>
                            <td>{prod.nombre}</td>
                            <td>{prod.descripcion}</td>
                            <td>{prod.precio}</td>
                            <td>{prod.stock}</td>
                            <td>{prod.fecha_vencimiento}</td>
                            <td></td>
                            <td>{prod.id_categoria}</td>
                            <td></td>
                            <td><button className="btn btn-warning btn-sm">Editar</button></td>
                            <td><button className="btn btn-danger btn-sm">Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListaProductos