import React from 'react'

function FormCategoria(value, setValue, manejarSubmit) {
    return (
        <div>
            <form onSubmit={(e)=>{manejarSubmit(e)}}>
                <div>
                    <label>Nombre de la Categoria</label>
                    <input type="text" className="form-control" value={value} onChange={(e)=>(e.target.value)}/>
                </div>
                <div>
                    <button className="btn btn-primary btn-lg">Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default FormCategoria