import React,{useState} from "react"
import './candid.css'
import {GrFormClose}from "react-icons/gr"
import pim1 from '../images/wedding/PS_39245.JPG'
import pim2 from '../images/wedding/IMG_8741.JPG'
import pim3 from '../images/wedding/DSC01951.jpeg'
import pim4 from '../images/wedding/934d4c14-f758-44eb-81f9-9447e05d5a31.jpg'
import pim5 from '../images/wedding/DSC_0298.jpg'
import pim6 from '../images/wedding/1.jpg'
import pim7 from '../images/wedding/_MG_9299.JPG'
import pim8 from '../images/wedding/01c6b74e-65a7-4d95-914c-e5e96670233b.jpg'
import pim9 from '../images/wedding/PS_39004.JPG'
import pim10 from '../images/wedding/PS_39269.JPG'
import pim11 from '../images/wedding/DSC_0289.jpg'
import pim12 from '../images/wedding/4056513e-da8d-49f7-b0ac-61df162cd929.jpg'
import pim13 from '../images/wedding/1bfd3d1a-7875-45d3-b574-cbbd25823a8b.jpg'
import pim14 from '../images/wedding/DSC03200.JPG'
import pim15 from '../images/wedding/PS_39004.JPG'
import pim16 from '../images/wedding/defa8804-0829-4651-bc3c-313217c8282d-1.jpg'
import pim17 from '../images/wedding/frount page.jpg'
import pim18 from '../images/wedding/IMG_2252.jpg'
import pim19 from '../images/wedding/IMG_2265.jpg'
import pim20 from '../images/wedding/09f3c926-e3f7-4a0b-a148-0459d65a89a3.jpg'


function Wedding() {
  let data=[
    {
      id:1,
      imgsrc:pim1,
    },
    {
      id:2,
      imgsrc:pim2,
    },
    
    {
      id:3,
      imgsrc:pim3,
    },
    {
      id:4,
      imgsrc:pim4,
    },
    {
      id:5,
      imgsrc:pim5,
    },
    {
      id:6,
      imgsrc:pim6
    },
    {
      id:7,
      imgsrc:pim7,
    },
    {
      id:8,
      imgsrc:pim8,
    },
    {
      id:9,
      imgsrc:pim9,
    },
    {
      id:10,
      imgsrc:pim10,
    },
    
    {
      id:11,
      imgsrc:pim11
    },
    {
      id:12,
      imgsrc:pim12
    },
    {
      id:13,
      imgsrc:pim13
    },
    {
      id:14,
      imgsrc:pim14,
    },
    {
      id:15,
      imgsrc:pim15,
    },
    {
      id:16,
      imgsrc:pim16,
    },
    {
      id:17,
      imgsrc:pim17,
    },
    {
      id:18,
      imgsrc:pim18,
    },
    {
      id:19,
      imgsrc:pim19,
    },
    {
      id:20,
      imgsrc:pim20,
    },
   

  ]
  const [model, setModel]=useState(false);
  const [tempimgSrc, setTempImgSrc]=useState('');

  const getImg=(imgsrc)=>{
      setTempImgSrc(imgsrc);
      setModel(true);
    }

    return (
        <div>
          <div class="header">
  <h1 style={{textAlign:'center'}}>Wedding photography</h1>
  
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
        </div>
    )
}

export default Wedding
