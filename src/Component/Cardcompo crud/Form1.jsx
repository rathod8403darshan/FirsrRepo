import React, { useContext, useState } from "react";
import { Creatcontext1 } from "./Perent";

function Form1() {
  const value = useContext(Creatcontext1);

  const show = async(e) => {
     
     if(e.target.type === "file"){
         let file = e.target.files[0]
         file ?  value.obj[e.target.name] = await toBase64(file)  : value.obj[e.target.name] = "";
         value.setImg(await toBase64(file));
         e.target.value = "";
     }
     else{
      value.obj[e.target.name] = e.target.value;
      value.blank[e.target.name] = "";
     }

     
    value.setObj({ ...value.obj });
  }




  const showData = () => {

    if(value.obj.id){
        const obj = value.arr.findIndex((x)=> x.id === value.obj.id);
        value.arr.splice(obj,1,value.obj);
    }
    else{
      value.count++;
      value.setCount(value.count);
      value.obj.id = value.count
      value.setObj({ ...value.obj});
      value.setBlank({ ...value.blank});
      value.arr.push(value.obj);
    }
   
    value.setArr([...value.arr]);
    localStorage.setItem("arr2",JSON.stringify(value.arr));
    localStorage.setItem("count2",JSON.stringify(value.count));
    value.setObj(value.blank);
    value.setImg("");
  }



  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});




  return (
    <>
      <form className="w-50 mx-auto shadow-lg p-4">
        
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Title :
          </label>
          <input name="fname"
            type="text"
            className="form-control"
            id="exampleInputPassword1" onChange={show} value={value.obj.fname} minlength="4" maxlength="5" size="10"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Descre :
          </label>
          <input name="decri"
            type="text"
            className="form-control"
            id="exampleInputPassword1" onChange={show} value={value.obj.decri} minlength="40" maxlength="50"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contact :
          </label>
          <input name="cnt"
            type="number"
            className="form-control"
            id="exampleInputPassword1" onChange={show} value={value.obj.cnt} min={100000000} max={10000000000}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Address :
          </label>
          <input name="Address"
            type="text"
            className="form-control"
            id="exampleInputPassword1" onChange={show} value={value.obj.Address} minlength="20" maxlength="25"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword11" className="form-label">
            price :
          </label>
          <input name="num"
            type="number"
            className="form-control"
            id="exampleInputPassword11" onChange={show} value={value.obj.num} min={100} max={10000}
          />
        </div>
        <div className="mb-3 form-check p-0">
          <label htmlFor="exampleCheck1" className="p-0">
            Select file :
          </label>{" "}
          <br />
          <input type="file" name="profile" style={{width:"100px"}} id="exampleCheck1" onChange={show}/>
          <img src={value.img} className="ms-5" height={"100px"} alt="" />
        </div>
        <button type="button" className="btn mt-3 btn-primary" onClick={showData}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Form1;


