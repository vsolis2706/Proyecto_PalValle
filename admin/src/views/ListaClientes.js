import React, {useState, useEffect} from 'react'
import {obtenerClientes} from "../services/clienteService"

function ListaClientes() {
    const [clientes, setClientes] = useState([])
    const getClientes = async () => {
        try {
            const clientesNuevos = await obtenerClientes()
            setClientes(clientesNuevos)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getClientes()
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default ListaClientes