import React, {useState, useEffect} from 'react'
import {editarProducto, productoId} from "../services/productoService"
import FormProducto from "../components/FormProducto"
import {useParams} from "react-router-dom"

function EditarProducto() {

    let {id} = useParams ()
    const [value, setValue] = useState({
        nombre:'',
        descripcion:'',
        precio:0,
        stock:0,
        fecha_vencimiento:'',
        fotos:[],
        id_categoria:1
    })

    const [categorias, setCategorias] = useState ([])
    const actualizarInput = (e) => {
        e.preventDefault()
        setValue({...value, [e.target.name]:e.target.value})
    }

    return (
        <div>
            
        </div>
    )
}

export default EditarProducto
