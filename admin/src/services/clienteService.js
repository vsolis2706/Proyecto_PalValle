import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API_1}/Cliente`

const obtenerClientes = async () => {
    try {
        let {data} = await axios.get(URL)
        return data
    } catch (error) {
        console.log(error)
    }
}

const obtenerClientePorId = async (id) =>{
    try {
      
      let {data} = await axios.get( `${URL}/${id}`)
      return data
    } catch (error) {
      throw error
    }
  }


export {
    obtenerClientes,
    obtenerClientePorId
}