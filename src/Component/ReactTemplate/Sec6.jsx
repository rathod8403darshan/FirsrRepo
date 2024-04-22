import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaBinoculars } from "react-icons/fa6";
import { BsBrightnessHighFill } from "react-icons/bs";
import { BsCalendar4Week } from "react-icons/bs";

function Card() {
  const arr = [
    {
      name: <BsBriefcase />,
      age: 28,
      path: "Lorem Ipsum",
      path2:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      color: true,
    },
    {
      name: <BsCardChecklist />,
      path: "Dolor Sitema",
      path2:
        "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
      color: false,
    },
    {
      name: <BsFillBarChartFill />,
      path: "Sed ut perspiciatis",
      path2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      color: false,
    },
    {
      name: <FaBinoculars />,
      path: "Nemo Enim",
      path2:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      color: true,
    },
    {
      name: <BsBrightnessHighFill />,
      path: "Magni Dolore",
      path2:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
      color: true,
    },
    {
      name: <BsCalendar4Week />,
      path: "Eiusmod Tempor",
      path2:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
      color: true,
    },
  ];
  return (
    <>
     

      <div className="main position-relative p-5 mt-5 mb-5">
      <div className="container mt-4">
      <div className='mx-auto text-center text-light mb-5 '>
                <h1 className='mb-3 fs-3 fw-bold' id='beforeh1' >SERVICES</h1>
                <p className='fw-semibold'> Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
        </div>
        <div className="row g-4">
          {arr.map((x, i) => (
            <div className=" col-lg-6 col-12 " key={i}>
              <div className="d-flex justify-content-around gap-3  h-100 p-3 main1"style={{background:"#2b2b2b"}}>
                <div
                  className="p-2 "
                  style={{ fontSize: 40, color: "#e03a3c" }}
                >
                  {x.name}
                </div>
                <div className="pt-3 text-light">
                  {" "}
                  <p id="borderbottom">{x.path}</p> <p className="mt-3" >{x.path2}</p>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
          <div
            className="w-100 h-100 position-absolute bg-dark top-0 start-0 end-0 bottom-0"
            style={{ zIndex: -1, transform: "skewY(-3deg)"}}
          ></div>
      </div>
      </div>
    </>
  );
}

export default Card;
