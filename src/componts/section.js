import React from 'react'
import { FaCentercode } from 'react-icons/fa'
import { MdFormatAlignCenter } from 'react-icons/md'
import Bimg4 from '../images/2 copy.jpg'
import Bimg5 from '../images/1st.jpg'
import Bimg6 from '../images/last page.jpg'
import Bimg7 from "../images/003 copy.jpg"
import Bimg8 from "../images/5 copy.jpg"
import Bimg9 from "../images/9 copy.jpg"
import Bimg10 from "../images/10 copy.jpg"
import Bimg11 from "../images/11 copy.jpg"
import Bimg12 from "../images/12.jpg"

function section() {
  return (
    <div>
      <>

        <h1 className="ps">Photography Showcase</h1>
        <hr />
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" >
            <div className="carousel-item active img-fluid">
              <img src={Bimg4} className="d-block w-100 h-100 " alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Bimg5} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Bimg6} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Bimg7} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Bimg8} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Bimg9} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Bimg10} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Bimg11} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Bimg12} className="d-block w-100 h-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    </div>
  )
}

export default section
