import axios from "axios"

const URL = `${process.env.REACT_APP_URL_PRODUCTOS}/Producto`

const obtenerProducto = async () => {
    try {
        let {data} = await axios.get(URL)
        return data
    } catch (error) {
        throw error
    }
}

const crearProducto = async (nuevoProducto) => {
    try {
        let headers = {
            "Content-Type":"application/json"
        }
        let {data} = await axios.post(URL, nuevoProducto, {headers})
    } catch (error) {
        console.log(error)
    }
}

const editarProducto = async (productoEditado, id) => {
    try {
        let headers = {
            "Content-Type":"application/json"
        }
        let {data} = await axios.put(`${URL}/${id}`, productoEditado, {headers})
        return data
    } catch (error) {
        console.log(error)
    }
}

const productoId = async (id) => {
    try {
        let {data} = await axios.get(`${URL}/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export {
    obtenerProducto,
    crearProducto
}