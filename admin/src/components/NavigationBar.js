import React from 'react'
import {Nav, NavDropdown, Navbar} from 'react-bootstrap'

function NavigationBar() {
    return (
        <>

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">PallValle</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Dashboard</Nav.Link>
  
      <NavDropdown title="Mantenimiento" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/ListaProductos">Productos</NavDropdown.Item>
        <NavDropdown.Item href="/ListarCategoria">Categoria</NavDropdown.Item>
        <NavDropdown.Item href="/ListaClientes">Clientes</NavDropdown.Item>
       {/*  <NavDropdown.Divider /> 
         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>  */}      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Cerrar Sesión</Nav.Link>
       
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default NavigationBar
