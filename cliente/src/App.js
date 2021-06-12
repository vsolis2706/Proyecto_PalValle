import React from 'react'
import {Switch, BrowserRouter as Router} from "react-router-dom"
import Navbar from "./components/Navbar"

import Routes from "./Routes"

function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
          <Routes />
        </Switch>
    </Router>
  )
}

export default App

