<<<<<<< HEAD
import React, {useState, useEffect}  from 'react'
import {useParams} from "react-router-dom"
import {editarProducto, obtenerProductoPorId} from "../services/productoService"
import {obtenerCategorias} from "../services/categoriaService"
import FormProducto from "../components/FormProducto"
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom"

function EditarProducto() {

let {id} = useParams();

const [value, setValue] = useState({
    nombre:'',
    descripcion:'',
    precio:0,
    stock:0,
    fecha_vencimiento: '',   
    fotos:[],    
    id_categoria:1
 })

 const [categorias, setCategorias] = useState([])
 const history = useHistory()
 
 const actualizarInput = (e) =>{
    e.preventDefault()
    setValue({
        ...value, 
        [e.target.name] : e.target.value
    })
}

const manejarSubmit = async (e, urlsFotos) => {
    try {
        e.preventDefault()
        await editarProducto({...value, fotos:[...urlsFotos]}, id)
        await Swal.fire({
            icon:'success',
            title: 'Producto editado exitosamente',
            showConfirmButton:false,
            timer:2000
            })
            history.push("/ListaProductos")
    } catch (error) {
        console.log(error)
    }

}  

const getProducto = async() =>{
    try {
    let productoObtenido = await obtenerProductoPorId(id)
    setValue({...productoObtenido})
    
    } catch (error) {
        console.log(error)
    }

    }

    const getCategorias = async() =>{
        try {
            let categoriasObtenidas = await obtenerCategorias()
            setCategorias([...categoriasObtenidas])
            console.log(categoriasObtenidas)
            } catch (error) {
                console.log(error)
            }

    }

    useEffect(() => {
        getProducto()
        getCategorias()
    }, [])


    return (
        <div>
            <h1>Editar Producto</h1>
            <FormProducto value ={value}
            setValue={setValue} 
            actualizarInput ={actualizarInput}
            manejarSubmit = {manejarSubmit}
            categorias ={categorias}
             />
=======
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
            
>>>>>>> 1fa6c7c6b714c3a53758dd7c048034a54048e6be
        </div>
    )
}

export default EditarProducto
