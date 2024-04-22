import React, { useContext } from "react";
import { Creatcontext1 } from "./Perent";
import './Card.css';
import { ImgZoom } from "./ImgFunc";


function Card1() {
  const value = useContext(Creatcontext1);
  console.log(value);

  const deletedata = (id1) => {
    const index = value.arr.findIndex((x) => x.id === id1)
    value.arr.splice(index, 1);
    value.setArr([...value.arr]);
    localStorage.setItem("arr2",JSON.stringify(value.arr));
    localStorage.setItem("count2",JSON.stringify(value.count));
  }


  const editdata = (id1) => {
     const obj2 = value.arr.find((x) => x.id === id1);
     value.setImg(obj2.profile);
     value.setObj({ ...obj2 });
     localStorage.setItem("arr2",JSON.stringify(value.arr));
     localStorage.setItem("count2",JSON.stringify(value.count));
  }
  return (
    <>
      <div className="container mt-4">
        <div className="row g-3">
          {value.arr.map((x, i) => (
            <div className="col-3" key={i}>
              <div className="div">
                <div className="card" style={{ overflow: "hidden"  }}>
                 <div className="p-2 " style={{ height: "200px" }} >
                 <img
                    src={x.profile}
                    className="card-img-top w-100 rounded-3"
                    alt="..."
                    style={{ height: "200px",objectFit:"cover" }} onClick={()=>ImgZoom(x.profile)}
                  />
                 </div>
                  <div className="card-body" style={{height:"270px"}}>
                    <div className="d-flex flex-wrap justify-content-between my-3">
                      <h5 className="card-title">{x.fname}</h5>
                      <h5 className="card-title">
                        <span className="text-danger">{x.num}</span> <span>$</span>
                      </h5>
                    </div>
                    <p className="card-text m-0 p-1"  style={{fontSize:"15px"}}>{x.decri}</p>
                    <p className="card-text p-0 m-1"  style={{fontSize:"13px"}}> <span style= {{color:"green"}}>Contact :</span>  {x.cnt}</p>
                    <p className="card-text p-0 m-1 mb-3 " style={{fontSize:"13px"}}> <span style= {{color:"green"}}>Address : </span>  {x.Address}</p>
                    <div className="d-flex justify-content-between align-content-center w-100 mt-2">
                      <button className="btn btn-danger" onClick={() => deletedata(x.id)}> Delete</button>
                      <button className="btn btn-success" onClick={() => editdata(x.id)}>Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </>
  );
}

export default Card1;
