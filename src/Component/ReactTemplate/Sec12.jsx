import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoSkype } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

function Componant() {


     const arr1 = [
     {
        title :"Our Services",
        li : (["Web Design","Web Development","Product Management","Marketing","Graphic Design"].map((x,i)=>(  <li key={i}><FaAngleRight />{x}</li>))),
     },
     {
        title :"Useful Links",
        li :  ["Home","About us","Services","Terms of service","Privacy policy"].map((x,i)=>(  <li key={i}><FaAngleRight />{x}</li>)),
     },
    ]
    return (
        <>
            <div className="main bg-dark text-light py-5">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div>
                                <h1> Presento <span style={{ color: "#e03a3c" }}>.</span></h1>
                                <p>
                                    A108 Adam Street <br />
                                    New York, NY 535022 <br />
                                    United States <br />
                                    <br />
                                </p>
                                <p>
                                    {" "}
                                    <span className="fw-bold ">Phone:</span> +1 5589 55488 55 <br />
                                    <span className="fw-bold ">Email:</span>
                                    info@example.com
                                </p>
                            </div>
                        </div>

                        
                         {arr1.map((x,i)=>(
                        <div className={`${i===1 ? "col-lg-2 " : "col-lg-3" } col-md-6 col-12`} key={i}>
                            <div>   
                            <h4 className="mb-4 mt-3 afterh4">{x.title}</h4>
                            <ul className="footerul m-0 p-0 me-2">
                               {x.li}
                            </ul>
                          </div>
                        </div>
                        ))}
                      

                       

                        <div className="col-lg-4 col-md-6 col-12 px-5">
                            <div>
                                <h4 className="mb-4 mt-3 afterh4">Join Our Newsletter</h4>
                                <p>
                                    Tamen quem nulla quae legam multos aute sint culpa legam
                                    noster magna
                                </p>
                                <form action="" className="row">
                                    <input type="email" className="inpform py-2 px-3 col-7 " name="email" /><input type="submit" value="Subscribe" className="col-5 Subscribe border border-0 py-2 px-3" />
                                </form>
                            </div>
                        </div>
                    </div>



                </div>




            </div>
            <div className="bg-black w-100 text-light p-5">
                <div className="container  ">
                    <div className="row">
                        <div className="col-md-6 col-12 text-md-start text-center">
                            <div className="">
                                © Copyright <strong><span>Presento</span></strong>. All Rights Reserved
                            </div>

                            Designed by <span style={{ color: "#e03a3c" }}>BootstrapMade</span>
                        </div>

                        <div className="icon col-md-6 col-12 text-md-end text-center mt-md-0 mt-4">

                            {
                                [<FaTwitter />, <FaFacebook />, <IoLogoInstagram />, <IoLogoSkype />, <FaLinkedin />].map((x, i) => (
                                    <a href="/" className="p-2 pt-1  text-light fs-5 rounded-2 me-2 " key={i}>{x}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Componant;