import React,{useState} from "react"
import './candid.css'
import {GrFormClose}from "react-icons/gr"

import nrw1 from '../images/untitled folder/7.jpg'
import nrw2 from '../images/untitled folder/PS_39005.JPG'
import nrw3 from '../images/untitled folder/f20f10bf-eee4-4b44-b83d-3412a1e5d338.jpg'
import nrw4 from '../images/untitled folder/PS_39032.JPG'
import nrw5 from '../images/untitled folder/ca61e0cd-6fbb-4ffa-ae06-ce21c0ef1da8.jpg'
import nrw6 from '../images/untitled folder/408d539a-b9c2-4cc6-8d81-6d5cacc3c128.jpg'
import nrw7 from '../images/untitled folder/6e7d464a-a7fc-4cf5-b03a-be5c36ddca1c.jpg'
import nrw8 from '../images/untitled folder/IMG_2352.jpg'
import nrw9 from '../images/untitled folder/IMG_2071.jpg'





function Candid() {
    let data =[
        {
            id:1,
            imgsrc:nrw1,
        },
        {
            id:2,
            imgsrc:nrw2,
        },
        {
            id:3,
            imgsrc:nrw3,
        },
        {
            id:4,
            imgsrc:nrw4,
        },
        {
            id:5,
            imgsrc:nrw5,
        },
        {
            id:6,
            imgsrc:nrw6,
        }
        ,
        {
            id:7,
            imgsrc:nrw7,
        },,
        {
            id:8,
            imgsrc:nrw8,
        },,
        {
            id:9,
            imgsrc:nrw9,
        },
    ] 
    const [model, setModel]=useState(false);
    const [tempimgSrc, setTempImgSrc]=useState('');

    const getImg=(imgsrc)=>{
        setTempImgSrc(imgsrc);
        setModel(true);

    }

    

        
    
    return (
        <>
        <div class="header">
                <h1 style={{textAlign:'center'}}>Candid</h1>

            </div>
        <div className={model? 'model open':'model'}>
            <img src={tempimgSrc} alt="" />
            <GrFormClose onClick={()=> setModel(false)}/>
        </div>
        <div className='gallery'>
            {data.map((item,index)=>{
                return(
                    <dev className="pic" key={index} onClick={()=>getImg(item.imgsrc)}>
                        <img src={item.imgsrc} alt="" style={{width:'100%',padding:"3px"}}/>
                    </dev>
                )
            })}
        </div>
        </>
    )
}

export default Candid
