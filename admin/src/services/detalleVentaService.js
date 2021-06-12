import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API_2}/detale_facturacion`


const obtenerDetalleFacturacion = async () => {
    try {
      let { data } = await axios.get(URL)
      return data
     
    } catch (error) {
      throw error
    }
  }
  const obtenerDetalleFacturacionPorId = async (id) =>{
    try {
      let {data} = await axios.get(`${URL}?id_facturacion=${id}`)
  
    
      return data
     
    } catch (error) {
      throw error
    }
  }

  export {
    obtenerDetalleFacturacion,
    obtenerDetalleFacturacionPorId
  }