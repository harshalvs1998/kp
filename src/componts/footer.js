import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import{ MdEmail}from 'react-icons/md'
import {FaYoutube}from 'react-icons/fa'
import img1 from '../images/we.jpg';
import img2 from '../images/ber.jpeg'
import '../App.css'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";


const footer = () => {
    return (
        <>
       
            <div>
                <footer className='f'>
                    <div>
                    <Link className="justify-content-center" to="/"><img src={img2} alt="" className='imn' /></Link>
                        <h1 className="fh1"><span lang="mr">क्ष</span>triyaphotography</h1>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center ">
                        <li className="navw">
                            <Link className="text-light " to="/" style={{ textDecoration: 'none' }}>Home</Link>
                        </li>
                        <li class="navw">
                            <Link className="text-light" to="/contact" style={{ textDecoration: 'none' }}>contact</Link>
                        </li>
                        <li class="navw">
                            <Link className="text-light" to="/about" style={{ textDecoration: 'none' }}>About</Link>
                        </li>
                    </div>
                   <address style={{color:'white'}}>New Mumbai,Kamothe,410209</address>
                   <h3 className="navh3"style={{color:'white'}}>7420009779</h3>
                  <a href="mailto:kshatriyaphotos2000@gmail.com" className="navh3" style={{color:'white',textDecoration:'none'}}><MdEmail style={{ color: '#6f9922',  }} size={20}className='mr-2'/>kshatriyaphotos2000@gmail.com</a>
                    <br />
                     <div>
                     
                        <a href="https://www.facebook.com/search/top?q=kshatriya%20photos"><FaFacebook style={{ color: '#22998d', }}size={20} className='mr-2'/></a >
                        
                            <a href="https://wa.me/917420009779"><FaWhatsapp style={{ color: '#899922', }}size={20}className='mr-2'/></a>
                            <a  href="https://www.instagram.com/kshatriya.production2000/"><FiInstagram style={{ color: '#22998d', }}size={20}className='mr-2'/></a >
                            <a  href="mailto:kshatriyaphotos2000@gmail.com"><MdEmail style={{ color: '#6f9922',  }} size={20}className='mr-2'/></a >    
                            <a  href="#"><FaYoutube style={{ color: 'red', }}size={20} className='mr-2'/></a >
                    </div>
                    <hr/>
                    <p>Copyright &copy; 2020 All rights reserved</p>


            </footer>
        </div>
     
        </>
            )
}



            export default footer
