import React from 'react'
import { CiFaceSmile } from "react-icons/ci";
import { BsFileEarmarkRichtext } from "react-icons/bs";
import { MdHeadsetMic } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";

function Sec5() {
    const arr1 = [
        {
          icon: <CiFaceSmile className='shadow-lg  p-2 rounded-circle bg-light '/>,
          head: "232",
          p : "Happy Clients"
        },
        {
            icon: <BsFileEarmarkRichtext className='shadow-lg  p-2 rounded-circle bg-light '/>,
            head: "521",
            p : "Projects"
        },
        {
            icon: <MdHeadsetMic className='shadow-lg  p-2 rounded-circle bg-light '/>,
            head: "1463",
            p : "Hours Of Support",
        },
        {
            icon: <MdPeopleAlt className='shadow-lg  p-2 rounded-circle bg-light '/>,
            head: "15",
            p : "Hard Workers",
        },
      ];
  return (
    <div className="container mb-5">
    <div className="row g-lg-4 g-2">
        {arr1.map((item,index) => (
           <div className="col-lg-3 col-md-6 col-12" key={index}>
             <div className="text-center border border-white  shadow mb-5 mt-lg-5 mt-0" >
                   <h1 className='p-0 mb-3' style={{color:"#e03a3c",marginTop:"-30px"}} >{item.icon}</h1>
                   <h2>{item.head}</h2>
                   <p>{item.p}</p>
            </div>
           </div>
        ))}
    </div>
  </div>
  )
}

export default Sec5
