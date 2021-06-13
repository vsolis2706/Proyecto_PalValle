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
           {/*      <Link className="nav-logo" to="/PalValle">
                <img src={Logo} alt="PalValle" width="90" height="80"/>
                </Link> */}
            <a className="navbar-brand fw-bold text-white text tituloLogo" href="/PalValle">
           <h1>PalValle</h1>  
            </a>
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
                    <Link className="nav-link" to="/">
                        Categorias
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Categorias
                    </Link>
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