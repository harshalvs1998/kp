import React,{useState} from "react"
import './candid.css'
import {GrFormClose}from "react-icons/gr"
import nrw1 from '../images/name/DSC03609.JPG'
import nrw2 from '../images/name/DSC03620.JPG'
import nrw3 from '../images/name/DSC03856.JPG'
import nrw4 from '../images/name/DSC03595.JPG'
import nrw5 from '../images/name/DSC03867.JPG'
import nrw6 from '../images/name/DSC03472.JPG'
import nrw7 from '../images/name/DSC03686.JPG'
import nrw8 from '../images/name/DSC03599.JPG'
import nrw9 from '../images/name/DSC03566.JPG'


function Namec() {
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
        },
        {
            id:8,
            imgsrc:nrw8,
        },
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
        <div>
             <div class="header">
                <h1 style={{textAlign:'center'}}>Name Ceremony</h1>

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

export default Namec
