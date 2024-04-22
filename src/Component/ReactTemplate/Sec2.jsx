import React from "react";
import Butoon1 from "./Butoon1";

function Sec2() {
  return (
    <>
      
        <div className="position-relative" style={{ height: "100vh" }}>
          <img
            src="https://bootstrapmade.com/demo/templates/Presento/assets/img/hero-bg.jpg"
            alt=""
            className="w-100"
            style={{ height: "100vh", filter:"brightness(60%)" }}
          />
          <div className="container ">
            <div className="position-absolute top-50  translate-middle-y text-light ">
              <h1 className="fw-bolder ">Bettter digital experience <br /> with Presento</h1>
              <p>
                We are team of talented designers making websites with <br /> Bootstrap
              </p>
              <Butoon1 />
            </div>
          </div>
        </div>
    
    </>
  );
}

export default Sec2;
