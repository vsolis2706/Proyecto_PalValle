import React,{useState} from "react";
import {Link} from "react-router-dom"
import Logo from '../assets/Logo.png'
import CarritoLogo from '../assets/shopping-cart.png'

function Navbar() {
  const [collapsed, setCollapsed] = useState(true)
  const manejarNavbar = () => setCollapsed(!collapsed)

  return (
<<<<<<< HEAD
    //   <div className="header">
    //   <div className="menu-bar">
    <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
           {/*      <Link className="nav-logo" to="/PalValle">
                <img src={Logo} alt="PalValle" width="90" height="80"/>
                </Link> */}
            <Link className="navbar-brand text-white fw-bold" to="/PalValle">
           {/* <img src={Logo} alt="PalValle"/> */}
           <h3>PalValle</h3>
            </Link>
=======
      <div className="header">
      <div className="menu-bar">
    <nav className="navbar fixed-top navbar-expand-lg navbar-light p-md-3">
            <div className="container-fluid">
           {/*      <Link className="nav-logo" to="/PalValle">
                <img src={Logo} alt="PalValle" width="90" height="80"/>
                </Link> */}
            <a className="navbar-brand fw-bold text-white text tituloLogo" href="/PalValle">
           <h1>PallValle</h1>  
            </a>
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
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
<<<<<<< HEAD
                    <Link className="nav-link" to="/categorias">
                        Categorias
=======
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
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
                    </Link>
                    </li>
                </ul>
                <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/carrito">
                  <img className="img-carrito"src={CarritoLogo} alt="Ir al carrito"/>
                </Link>
              </li>
            </ul>
          </div>
                </div>
            </div>
    </nav>
    // </div>
    //         </div>
  );
}

export default Navbar;