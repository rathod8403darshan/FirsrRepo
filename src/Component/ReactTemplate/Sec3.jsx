import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaBinoculars } from "react-icons/fa6";

function Sec3() {
  const arr = [
    {
      name: <BsBriefcase />,
      path: "Corporis voluptates sit",
      path2:
        "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
      color: true,
    },
    {
      name: <BsCardChecklist />,
      path: "Ullamco laboris nisi",
      path2:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      color: false,
    },
    {
      name: <BsFillBarChartFill />,
      path: "Labore consequatur",
      path2:
        "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
      color: false,
    },
    {
      name: <FaBinoculars />,
      path: "Beatae veritatis",
      path2:
        "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
      color: true,
    },
  ];

  return (
    <>
      <div className="position-relative text-light pb-5 pt-1 mt-5 mb-5">
        <div className="container mt-5">
          <div className="row g-5">
            <div className="col-lg-5 col-12 pt-5">
              <h1>Voluptatem dignissimos provident quasi</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <button
                className="btn btnabout text-light px-4 rounded-pill bg-transparent"
                style={{ border: "1px solid #e03a3c" }}
                id="btntop"
              >
                About us &gt;
              </button>
            </div>
            <div className="col-lg-7 col-12">
              <div className="row g-4">
                {arr.map((x,i) => (
                  <div className="col-sm-6 col-12" key={i}>
                    <div className=" justify-content-around align-items-center p-2">
                      <div className="" style={{ fontSize: 30, color:"#e03a3c" }}>
                        {x.name}
                      </div>
                      <div className="">
                        {" "}
                        <p className="fs-5">
                          <b>{x.path}</b>
                        </p>
                        <p>{x.path2}</p>{" "}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 h-100 position-absolute bg-dark top-0 start-0 end-0 bottom-0" style={{zIndex:-1,transform: "skewY(-3deg)"}}>

        </div>
      </div>
    </>
  );
}

export default Sec3;
