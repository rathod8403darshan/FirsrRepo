import React, { createContext, useState } from 'react'
import Card1 from './Card1'
import Form1 from './Form1'
import { ImgZoomout } from './ImgFunc';

 export const Creatcontext1 = createContext();
function Perent() {
    

    let [arr,setArr]= useState( JSON.parse(localStorage.getItem("arr2")) || []);
    const [obj,setObj]= useState({});
    const [blank,setBlank]= useState({});
    const [img,setImg]= useState("");
    let [count,setCount]= useState(JSON.parse(localStorage.getItem("count2")) || 0);

  return (
    <>
        <Creatcontext1.Provider value={{arr,setArr,obj,setObj,count,setCount,blank,setBlank,img,setImg}}>
                <Form1/>
              <Card1/>
        </Creatcontext1.Provider>
        <div className="imgZoom">
            <div className="imgZoom2">
                 
            </div>
            <div className='position-fixed top-0 end-0 text-white fs-1 me-4' onClick={()=>ImgZoomout()}>
                    X
            </div>
        </div>
    
    </>
  )
}

export default Perent