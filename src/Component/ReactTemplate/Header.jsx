import React from 'react'
import { FaList } from "react-icons/fa";

function Header1() {
    return (
        <>
            <div className="mian p-2 bg-white position-fixed top-0 w-100 " style={{zIndex:99}}>
                <div className="container d-flex justify-content-between  ">
                    <div>
                        <h1> Presento <span style={{color : "#e03a3c"}}>.</span></h1>
                    </div>
                    <div>
                        <div className='d-lg-none d-block'>
                            <button className='btn btn1  px-4 py-2 mt-2'>Get satrted</button>
                            <FaList data-bs-toggle="modal" data-bs-target="#exampleModal" className='fs-2 mt-2 ms-4' />
                        </div>
                    </div>
                    <div className='d-flex justify-content-around gap-4 flex-wrap d-lg-flex d-none  pt-3  align-content-center '>
                        {["Home", "About", "Service", "Portfolio", "Team", "Blog", "Drop Down", "Contact", "Get Started"]
                            .map((x, i) => (
                                i === 8 ? <button className='btn btn1111 text-light px-4 py-0' key={i}>{x}</button> : i === 6 ? (<div className="dropdown" key={i}>
                                    <a className="btn btn-secondary dropdown-toggle text-dark" data-bs-auto-close="false" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        {x}
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" key={i}>
                                      {["Drop Down 1","Deep Drop Down","Drop Down 2","Drop Down 3","Drop Down 4"].map((x,i)=>(
                                              i===1 ?  <li key={i}>

                                              <div className="btn-group dropstart">
                                                  <button type="button" className="btn btn-secondary dropdown-toggle text-dark p-0 m-0 my-1 " data-bs-toggle="dropdown" aria-expanded="false">
                                                  {x}
                                                  </button>
                                                  <ul className="dropdown-menu p-0 m-0">
                                                  {["Deep Drop Down 1",,"Deep Drop Down 2","Deep Drop Down 3","Deep Drop Down 4","Deep Drop Down 5"].map((x,i)=>(
                                                        <li className='my-2' key={i}>{x}</li>
                                                    ))}
                                                  </ul>
                                              </div>
  
  
                                          </li> :   <li className='my-2' key={i}>{x}</li>
      
                                    
                                      ))}
                                      
                                    </ul>
                                </div>) : <li  className="list-unstyled" key={i}>{x}</li>

                            ))}
                    </div>
                </div>
            </div>





            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content ">
                       
                        <div className="modal-body">
                        <div className='pt-3'>
                        {["Home", "About", "Service", "Portfolio", "Team", "Blog", "Drop-Down", "Contact", "Get Started"]
                            .map((x, i) => (
                              i === 6 ? (<div className="dropdown text-dark" key={i}>
                                    <a className="btn btn-secondary dropdown-toggle text-dark ms-0 p-0  mb-3" data-bs-auto-close="false" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        {x}
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li>Drop Down 1</li>
                                        <li>

                                            <div className="btn-group dropstart">
                                                <button type="button" className="btn btn-secondary dropdown-toggle text-dark " data-bs-toggle="dropdown" aria-expanded="false">
                                                Deep Drop Down
                                                </button>
                                                <ul className="dropdown-menu">
                                                  {["Deep Drop Down 1",,"Deep Drop Down 2","Deep Drop Down 3","Deep Drop Down 4","Deep Drop Down 5"].map((x,i)=>(
                                                      <li key={i}>{x}</li>
                                                  ))}
                                                </ul>
                                            </div>


                                        </li>
                                        <li>Drop Down 2</li>
                                        <li>Drop Down 3</li>
                                        <li>Drop Down 4</li>
                                    </ul>
                                </div>) : <li key={i} className="list-unstyled mb-4">{x}</li>

                            ))}
                    </div>
                        </div>
                       
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header1