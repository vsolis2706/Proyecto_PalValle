import React, {useState, useEffect, useRef} from 'react'

function FormProducto({value, actualizarInput, setValue, manejarSubmit, categorias}) {
    
    const inputFotos = useRef()
    const anadirFoto = (e) => {
        e.preventDefault()
        let nuevaFoto = inputFotos.current.value
        setValue({...value, fotos:[...value.fotos, nuevaFoto]})
    }
    return (
        <div>
            <form>
                <div>
                    <label>Nombre</label>
                    <input type="text" placeholder="Ejm. Juan" className="form-control"/>
                </div>
                <div>
                    <label>Descripción</label>
                    <input type="text" placeholder="Ejm. Perez" className="form-control"/>
                </div>
                <div>
                    <label>Precio</label>
                    <input type="number" className="form-control"/>
                </div>
                <div>
                    <label>Stock</label>
                    <input type="number" className="form-control"/>
                </div>
                <div>
                    <label>Fecha</label>
                    <input type="date" className="form-control"/>
                </div>
                


                <div className="mb-3">
                    <label className="form-label">Foto</label>
                    <input type="text" className="form-control" ref={inputFotos}/>
                    <button className="btn btn-primary btn-sm" onClick={(e)=>{anadirFoto(e)}}>Agregar Foto</button>
                </div>


                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default FormProducto
