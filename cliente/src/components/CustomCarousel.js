import React,{useRef} from 'react'
import {Carousel} from "bootstrap" 
<<<<<<< HEAD
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
=======
import foto1 from "../assets/foto01.jpg"
import foto2 from "../assets/foto02.jpg"
import foto3 from "../assets/foto03.jpg"
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649

function CustomCarousel() {

  let refCarousel = useRef() //la referencia

  let myCarousel = refCarousel.current //el elemento HTML, getElementById
<<<<<<< HEAD
  let bsCarousel = new Carousel(myCarousel, {interval:5000}) //la instancia Carousel de Bootstrap
=======
  let bsCarousel = new Carousel(myCarousel, {interval:10000}) //la instancia Carousel de Bootstrap
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
 

  const avanzarCarousel = () => {
    bsCarousel.next()
  }

  const regresarCarousel = () => {
    bsCarousel.prev()
  }

  return (
    <div>
<<<<<<< HEAD
        <div ref={refCarousel} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" onClick={regresarCarousel}  data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={avanzarCarousel} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default CustomCarousel
=======
    <div ref={refCarousel} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={foto1} className="d-block w-100" alt="..." />
         
        </div>
        <div className="carousel-item">
          <img src={foto2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={foto3} className="d-block w-100" alt="..." />
        </div>
      </div>
       <button className="carousel-control-prev" type="button" onClick={regresarCarousel}  data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={avanzarCarousel} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> 
    </div>
  </div>
  )
}

export default CustomCarousel
>>>>>>> 1960b60ceabead59cd48ffe5aeab3e795a76f649
