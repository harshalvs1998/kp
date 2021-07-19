import React,{useState} from "react"
import './candid.css'
import {GrFormClose}from "react-icons/gr"
import prw1 from '../images/prewedding/6R1A8562.JPG'
import prw2 from '../images/prewedding/PS_39178.JPG'
import prw3 from '../images/prewedding/03-1.jpg'
import prw4 from '../images/prewedding/_MG_9299.JPG'
import prw5 from '../images/prewedding/DSC_0298.jpg'
import prw6 from '../images/prewedding/02.jpg'
import prw7 from '../images/prewedding/DSC_0289.jpg'


function Prewedding() {
    let data =[
        {
            id:1,
            imgsrc:prw1,
        },
        {
            id:2,
            imgsrc:prw2,
        },
        {
            id:3,
            imgsrc:prw3,
        },
        {
            id:4,
            imgsrc:prw4,
        },
        {
            id:5,
            imgsrc:prw5,
        },
        {
            id:6,
            imgsrc:prw6,
        }
        ,
        {
            id:7,
            imgsrc:prw7,
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
                <h1 style={{textAlign:'center'}}>PreWedding photography</h1>

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

export default Prewedding
