
import React from 'react'
import {Switch, BrowserRouter as Router} from "react-router-dom"
<<<<<<< HEAD
import CarritoContextProvider from "./context/carritoContext";
import Navbar from "./components/Navbar"
=======
import Navbar from "./components/Navbar"

>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
import Routes from "./Routes"

function App() {

  return (
    <Router>
<<<<<<< HEAD
      <CarritoContextProvider>
        <Navbar/>
        <Switch>
            <Routes />
          </Switch>
      </CarritoContextProvider>
=======
      <Navbar/>
      <Switch>
          <Routes />
        </Switch>
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
    </Router>
  )
}

export default App



