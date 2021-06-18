import React from 'react'

function FormCliente({
    value,
    actualizarInput, 
  setValue, 
  manejarSubmit
}) {
    return (
        <div>
      <form onSubmit={(e) => {manejarSubmit(e)}}>
        <div className="mb-3">
          <label className="form-label">
            Nombre 
          </label>
          <input 
            type="text" 
            className="form-control" 
            name = "Nombres"
            value={value.Nombres}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">
          Apellidos
          </label>
          <input 
            type="text" 
            className="form-control" 
             name = "Apellidos"
            value={value.Apellidos}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
          Email
          </label>
          <input 
            type="email" 
            className="form-control" 
             name = "email"
            value={value.email}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
          DNI
          </label>
          <input 
            type="text" 
            className="form-control" 
             name = "dni"
            value={value.dni}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
          Telefono
          </label>
          <input 
            type="text" 
            className="form-control" 
             name = "telefono"
            value={value.telefono}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
          Dirección
          </label>
          <input 
            type="text" 
            className="form-control" 
             name = "direccion"
            value={value.direccion}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
          Distrito
          </label>
          <input 
            type="text" 
            className="form-control" 
             name = "distrito"
            value={value.distrito}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
          Número Tarjeta
          </label>
          <input 
            type="text" 
            className="form-control" 
             name = "nro_tarjeta"
            value={value.nro_tarjeta}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
          Código seguridad
          </label>
          <input 
            type="text" 
            className="form-control" 
             name = "cod_seguridad"
            value={value.cod_seguridad}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>




        <div className="d-grid">
          <button className="btn btn-primary btn-md" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  
    )
}

export default FormCliente
