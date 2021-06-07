import React from 'react'
import Routes from "./Routes"
import {BrowserRouter as Router, Switch} from "react-router-dom"
<<<<<<< HEAD
 import Layout from "./components/Layout"
import NavigationBar from "./components/NavigationBar" 
function App () {
return(
  <>
    <NavigationBar/> 
   <Layout> 

    <Router>
      <Switch>
        <Routes/>
      </Switch>
    </Router>
    </Layout> 

    </>
=======

function App () {
return(
  <Router>
    <div className="container-lg p-5">
      <Switch>
        <Routes/>
      </Switch>
    </div>
  </Router>
>>>>>>> 1fa6c7c6b714c3a53758dd7c048034a54048e6be
  )
} 

export default App
