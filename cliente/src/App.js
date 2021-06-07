import React from 'react'
import {Switch, BrowserRouter as Router, Link} from "react-router-dom"
import Navbar from "./components/Navbar"
import Carrusel from "./components/Carrusel"
import Routes from "./Routes"

function App() {

  return (
    <Router>
      <Navbar/>
        <Carrusel/>
    </Router>
  )
}

export default App

