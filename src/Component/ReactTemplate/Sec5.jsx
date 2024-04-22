import React from 'react'
import "./Sec5.css"
import { RiGpsLine } from "react-icons/ri";
import { RiBodyScanLine } from "react-icons/ri";
import { RiSunLine } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import { RiCheckDoubleLine } from "react-icons/ri";




export default function Accordian(props) {

  return (
    <>
      <div className="container">
        <ul className="nav nav-tabs w-100 " id="myTab" role="tablist">
          <div className="row g-4 w-100">
            <div className="col-lg-3 col-md-6 ">
              <li className="nav-item " role="presentation">
                <button className="nav-link h-25 active p-3  text-start w-100 " id="home-tab" data-bs-toggle="tab" data-bs-target="#home2" type="button" role="tab" aria-controls="home" aria-selected="true">
                  <div className="d-flex justify-content-around align-contant-center pt-3">
                    <p className='pe-2'> <RiGpsLine className='fs-1' /> </p>
                    <p className="">Modi sit est dela pireda nest</p>
                  </div>
                </button>
              </li>
            </div>

            <div className="col-lg-3 col-md-6 ">
              <li className=" nav-item  " role="presentation">
                <button className="nav-link h-25  p-3  text-start w-100 " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile2" type="button" role="tab" aria-controls="profile" aria-selected="false">
                  <div className="d-flex justify-content-around align-contant-center pt-3">
                    <p className='pe-2'> <RiBodyScanLine className='fs-1' /></p>
                    <p>Unde praesenti mara setra le</p>
                  </div>
                </button>
              </li>

            </div>
            <div className="col-lg-3 col-md-6 ">
              <li className=" nav-item   " role="presentation">
                <button className="nav-link h-25 p-3 text-start w-100 " id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact2" type="button" role="tab" aria-controls="contact" aria-selected="false">
                  <div className="d-flex justify-content-around align-contant-center pt-3">
                    <p className='pe-4'><RiSunLine className='fs-1' /></p>
                    <p>Pariatur explica nitro   dela</p>
                  </div>
                </button>
              </li>

            </div>
            <div className="col-lg-3 col-md-6 ">
              <li className=" nav-item  " role="presentation">
                <button className="nav-link h-25 p-3 py-4 w-100  text-start " id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact1" type="button" role="tab" aria-controls="contact" aria-selected="false">
                  <div className="d-flex justify-content-around align-contant-center pt-1">
                    <p className='pe-2'> <MdOutlineStorefront className='fs-1' /> </p>
                    <span> Nostrum qui dile node</span>
                  </div>
                </button>
              </li>
            </div>




          </div>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active mt-5" id="home2" role="tabpanel" aria-labelledby="home-tab">

          <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><RiCheckDoubleLine id='icontick'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><RiCheckDoubleLine id='icontick'/> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><RiCheckDoubleLine id='icontick'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <img src="https://bootstrapmade.com/demo/templates/Presento/assets/img/tabs-1.jpg" alt="" className="img-fluid"/>
              </div>
            </div>


          </div>
          <div className="tab-pane fade mt-5" id="profile2" role="tabpanel" aria-labelledby="profile-tab">

          <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><RiCheckDoubleLine id='icontick'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><RiCheckDoubleLine id='icontick'/> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><RiCheckDoubleLine id='icontick'/> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                  <li><RiCheckDoubleLine id='icontick'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="https://bootstrapmade.com/demo/templates/Presento/assets/img/tabs-2.jpg" alt="" className="img-fluid"/>
              </div>
            </div>


          </div>
          <div className="tab-pane fade mt-5" id="contact2" role="tabpanel" aria-labelledby="contact-tab">


          <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <ul>
                  <li><RiCheckDoubleLine id='icontick'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><RiCheckDoubleLine id='icontick'/> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><RiCheckDoubleLine id='icontick'/> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                </ul>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="https://bootstrapmade.com/demo/templates/Presento/assets/img/tabs-3.jpg" alt="" className="img-fluid"/>
              </div>
            </div>

          </div>
          <div className="tab-pane fade mt-5" id="contact1" role="tabpanel" aria-labelledby="contact-tab">

          <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><RiCheckDoubleLine id='icontick'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><RiCheckDoubleLine id='icontick'/> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><RiCheckDoubleLine id='icontick'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="https://bootstrapmade.com/demo/templates/Presento/assets/img/tabs-4.jpg" alt="" className="img-fluid"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}