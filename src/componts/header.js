import React from 'react'
import sap from '../images/sag.jpg'
import { BsArrowRight } from "react-icons/bs";
import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-router-dom';



function header() {

    return (
        <>
            <div className="header-wraper">
                <div className="a1">
                <img src={sap} alt="" className='sa1' /> 
                <span className="vl"></span>
                    <h1 className='ah'>Hi i'm sagar <br /> the photographer <br /> and i do photography of</h1>
                    <br />
                  <span className="type">
                    <TypeWriterEffect 
                      
                        textStyle={{
                            fontFamily: 'Red Hat Display',
                            color: '#3F3D56',
                            fontWeight: 500,
                            fontSize: '1.5em',
                            
                            
                            

                        }}s
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    loop={true}
                    nextTextDelay={1000}
                    typeSpeed={30}
                   
                    multiText={[
                        
                       'Pre wedding photography, \nWeeding photography,\nBirthday  photography,\nFashion  photography,\nCandid  photography,\nMaternity shoot,\nName ceremony,\nCinematic videography',
                        
                      
                    ]}
                    
                   
                   
                    
                    />
                 </span>
                 <span className="type2">
                    <TypeWriterEffect 
                      
                        textStyle={{
                            fontFamily: 'Red Hat Display',
                            color: '#3F3D56',
                            fontWeight: 500,
                            fontSize: '1.5em',
                            
                            
                            

                        }}s
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    loop={true}
                    nextTextDelay={1000}
                    typeSpeed={30}
                   
                    multiText={[
                        
                       'Pre wedding photography','Weeding photography','Birthday  photography','Fashion  photography','Candid  photography','Maternity shoot','Name ceremony','Cinematic videography'
                        
                      
                    ]}
                    
                   
                   
                    
                    />
                 </span>
                 
                <span>
                 
                 </span>
                 <Link to="/about" className='aba'>More about me...<BsArrowRight /></Link>

                 
                </div>
            </div>
        </>
    )
}

export default header
