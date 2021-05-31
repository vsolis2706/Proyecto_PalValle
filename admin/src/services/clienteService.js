import axios from "axios"

const URL = `${process.env.REACT_APP_URL_CLIENTES}/Cliente`

const obtenerClientes = async () => {
    try {
        let respuesta = await axios.get(URL)
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}

export {
    obtenerClientes
}