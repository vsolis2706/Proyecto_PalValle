import React from 'react'
import Routes from "./Routes"
import {BrowserRouter as Router, Switch} from "react-router-dom"
<<<<<<< HEAD
import Layout from "./components/Layout"
import NavigationBar from "./components/NavegationBar"  
import "./estilos.css";
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
=======
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
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649

    </>
  )
} 

export default App
