// import React from 'react'
// import './App.css'
// import Producto from './components/Producto'
// import Navbar from './components/Navbar'
// import Productos from './components/Productos'
// import CheckoutPage from './components/CheckoutPage'
// import CheckoutCard from './components/CheckoutCard'
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

// function App() {
//   return (
//     <div className="container">
//       {/* <Navbar/> */}
//       {/* <CheckoutPage/> */}
//       {/* <CheckoutCard/> */}
//       {/* <Productos/> */}
//       {/* <Producto/> */}
//     </div>
//   )
// }

// export default App


