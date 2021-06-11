import React,{useState} from "react";
import {Link} from "react-router-dom"
import LogoPalValle from "../img/LogoPalValle.jpg"

function Navbar() {
  const [collapsed, setCollapsed] = useState(true)
  const manejarNavbar = () => setCollapsed(!collapsed)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="PalValle">
          <img src={LogoPalValle} alt="PalValle"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!collapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={manejarNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${collapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav me-2 mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/detalleproducto">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" to="/categorias">
                Categorias
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">
                Ingresar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/carrito">
                Ir a Carrito
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
