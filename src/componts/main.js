import React from 'react'
import Bimg from '../images/6R1A8562.JPG'
import Bimg1 from '../images/PS_39269.JPG'
import Bimg2 from '../images/3.jpg'
import Bimg3 from '../images/DSC_0298.jpg'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function main() {
    return (
        <>
       
        <div>
            <>
            <div className="com">
                  <h2 className="com1">hey if you have any special reqquirement about camera or any eqqupment</h2>
                  <h2 className="com1">click on contact button bellow we will give you replay as soon as possible</h2>
                  
                  <h2 className="com1">If you have any questions, feel free to contact me</h2>
              </div>
              <div className="text-center">
              <Link className="btn btn-secondary btn-lg text-center justify-content-center" to="/contact" role="button">contact Me</Link>
              </div>
            <hr />
            <div className="container" >
              <div className="m2">
                  <Link to="/prewedding" style={{color:'black',fontFamily:"serif",textDecoration:'none'}}>
                  <img src={Bimg} alt="" className="m1" />
                 <span className="ht1">Pre Wedding</span>
                  </Link>
                  </div>
              <div className="m3">
                  <Link to="/wedding"style={{color:'black',fontFamily:"serif",textDecoration:'none'}}>
                  <img src={Bimg1} alt="" className="m1" />
                   <span className="ht1">Wedding Images</span>
                  </Link>
                  </div>
              <div className="m4">
                  <Link to="/candid"style={{color:'black',fontFamily:"serif",textDecoration:'none'}}>
                  <img src={Bimg2} alt="" className="m1" />
                 <span className="ht1"> Candid Images</span>
                  </Link>
                  </div>
              <div className="m5">
                  <Link to="/namec"style={{color:'black',fontFamily:"serif",textDecoration:'none'}}>
                  <img src={Bimg3} alt="" className="m1" />
                 <span className="ht1 "> Name ceremony</span>
                  </Link>
                  </div>
                  <div className="m6" >
                  <Link to="/video"style={{color:'black',fontFamily:"serif",textDecoration:'none'}}>
                  <img src={Bimg1} alt="" className="m1" />
                 <span className="ht1 "> Cinematic video</span>
                  </Link>
                  </div>
              </div>  
              
              
              
              
            </>
        </div>
        </>
    )
}

export default main
