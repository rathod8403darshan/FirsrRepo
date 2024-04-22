import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Card2() {
  const arr = [
    {
      name: "https://bootstrapmade.com/demo/templates/Presento/assets/img/team/team-1.jpg",
      path: "Walter White",
      path2: "Chief Executive Officer",
    },
    {
      name: "https://bootstrapmade.com/demo/templates/Presento/assets/img/team/team-2.jpg",
      path: "Sarah Jhonson",
      path2: "Product Manager",
    },
    {
      name: "https://bootstrapmade.com/demo/templates/Presento/assets/img/team/team-3.jpg",
      path: "William Anderson",
      path2: "CTO",
    },
    {
      name: "https://bootstrapmade.com/demo/templates/Presento/assets/img/team/team-4.jpg",
      path: "Amanda Jepson",
      path2: "Accountant",
    },
  ];
  return (
    <>
      <div className="position-relative p-5 mt-5">
      <div className="container">
      <div className='mx-auto text-center text-light mb-5 '>
                <h1 className='mb-3 fs-3 fw-bold' id='beforeh1' >TEAM</h1>
                <p className='fw-semibold'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
        </div>
        <div className="row g-4" >
            {arr.map((x,i)=>(
                 <div className="col-lg-3 col-md-6 col-12" key={i}>
                 <div className="card position-relative hovercard">
                   <img
                     src={x.name}
                     className="card-img-top"
                     alt="..."
                   />
                   <div className="card-body">
                     <h6 className="card-title">{x.path}</h6>
                     <p className="card-text text-dark-emphasis" style={{fontSize: "15px"}}>{x.path2}</p>
                   </div>

                     <div className="text-light "id="iconhover1">
                            <b className="ms-1"><FaTwitter className=" p-2  rounded-circle iconhov   fs-2"/></b>
                            <b className="ms-1"><FaFacebook className=" p-2 rounded-circle iconhov   fs-2"/></b>
                            <b className="ms-1"><FaInstagramSquare className=" p-2 rounded-circle iconhov    fs-2"/></b>
                            <b className="ms-1"><FaLinkedin className=" p-2 rounded-circle iconhov   fs-2"/></b>
                     </div>
                 </div>
               </div>
            ))}
        </div>
      </div>
      <div
            className="w-100 h-100 position-absolute bg-dark top-0 start-0 end-0 bottom-0"
            style={{ zIndex: -1, transform: "skewY(-3deg)"}}
          ></div>
      </div>
    </>
  );
}

export default Card2;