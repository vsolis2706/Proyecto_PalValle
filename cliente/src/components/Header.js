import React from 'react'
import CustomCarousel from './CustomCarousel'
<<<<<<< HEAD

function Header() {
    return (
      <header>
        <CustomCarousel/>
      </header>
    )
}

export default Header
=======
import foto4 from "../assets/foto04.jpg"
import foto6 from "../assets/foto06.jpg"

import foto5 from "../assets/foto05.jpg"

function Header() {
    return (
        <header className="container mt-0 contenedor">
      <div className="head1">
      <CustomCarousel/>
      </div>
      <div className="head2">
        <img src={foto6} alt="foto2"/>
      </div>
      <div className="head3">
        <img src={foto5} alt="foto3"/>
      </div>
      <div className="head4">
        <img src={foto4} alt="foto4"/>
      </div>
      
       {/* aqui comit */}
      </header>


    )
}

export default Header
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
