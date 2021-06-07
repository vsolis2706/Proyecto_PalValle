import React,{useState} from "react";
import {Link} from "react-router-dom"

function Navbar() {
  const [collapsed, setCollapsed] = useState(true)
  const manejarNavbar = () => setCollapsed(!collapsed)

  return (
      <div className="header">
      <div className="menu-bar">
    <nav className="navbar fixed-top navbar-expand-lg navbar-light p-md-3">
            <div className="container-fluid">
                <Link className="nav-logo" to="/PalValle">
                <img src="./img/LogopalValle.png" alt="PalValle"/>
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
                    <Link className="nav-link" to="/detalleproducto">
                        Productos
                    </Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        Categorias
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        Ingresar
                    </a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/carrito">
                        Ir a Carrito
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
    </nav>
    </div>
            </div>
  );
}

export default Navbar;
