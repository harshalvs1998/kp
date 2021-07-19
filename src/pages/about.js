import React from 'react'
import sap from '../images/sag.jpg'

function about() {
    return (
        <>
        <div className="container1">

            <div className="mainab">
                <div className="lmr">
                    <h5 lang='mr' >नमस्कार, मी सागर आहे</h5>
                    <h5 lang='mr'>मी एक व्यावसायिक छायाचित्रकार आहे आणि <br /> मागील 5 वर्षापासून या क्षेत्रात कार्यरत आहे.</h5>
                    <h5 lang='mr'>छायाचित्रण फक्त माझे करिअर नाही तर ते माझे आवड, <br /> माझे स्वप्न, माझे जीवन आहे.</h5>
                    <h5 lang='mr'>ही एक गोष्ट आहे जी मला इतरांपासून काहीतरी वेगळी करते. </h5>
                    <h5 lang='mr'>मी कॉलेजमध्ये असताना मी छायाचित्रण सुरू केले होते <br /> माझे काका देखील छायाचित्रकार होते त्याने मला त्याचा जुना कॅमेरा दिला होता</h5>
                    <h5 lang='mr'>मी नवी मुंबईत राहतो.</h5>
                    <h5 lang='mr'>मला फोटोग्राफी आवडते किंवा मी केवळ माझ्या व्यवसायामुळेच <br /> फोटोग्राफी करतो अस नाही तर लोक कौटुंबिक कार्यात एकमेकांना भेटतात तेव्हा <br /> एकमेकांसाठी त्याच असलेलं प्रेम हे त्यांच्या नात्यात दिसत आणि ते क्षण मला कॅमेऱ्यात टिपायला आवडतात</h5>
                </div>
             
                <div className="len">
                    <h5>Hi,  i am Sagar</h5>
                    <h5>a Professional Photographer and am working in this field from last 5years.  </h5>
                    <h5>Photography is not only my Career but it's my Passion, my Dream, my life.</h5>
                    <h5>It's a thing which makes me something different from others. </h5>
                    <h5>i started photography when i was in college <br /> my uncle was a also photographer he gave me his old camera </h5>
                    <h5> i live in new mumbai</h5>
                    <h5>
                        people meet each other in family function otherwise all are busy in his own work <br /> but when they came together i like to be there for that family reunion and i like to <br /> save that moment in my camera and most of times its happen in function </h5>
                </div>

            </div>
          
            
        </div>
        <div className="abimg"><img src={sap} alt="" style={{
                width: '20rem', hight: '30rem', borderRadius: '12rem' }} /></div>
            
        </>
    )
}

export default about
