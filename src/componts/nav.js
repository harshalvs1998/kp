import React from 'react'
import img1 from '../images/we.jpg';
import img2 from '../images/ber.jpeg'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

const nav = () => {
    return (<>
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={img2} alt="" className='imn' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Photo Gallery
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/Wedding">Wedding </Link></li>
            <li><Link className="dropdown-item" to="/prewedding">Pre Wedding</Link></li>
            <li><Link className="dropdown-item" to="/candid">Candid</Link></li>
            <li><Link className="dropdown-item" to="/namec">Name Ceremony</Link></li>

          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/video">Video</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</>
    )
}

export default nav
