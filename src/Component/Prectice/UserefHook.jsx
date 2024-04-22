import React, { useRef, useState } from 'react'

export default function UserefHook() {
  
  const [ary , setary] = useState([]);
  const [count , setcount] = useState(0);
  const inpref = useRef();

  
  const show = ()=>{
    
    setcount(count+1);
    ary.push({
      name: inpref.current.value,
      count : count,
    })
   
    console.log(count)
     setary([...ary])
    // console.log(ary);
    }
    const delete1 = (id1)=>{
       const ind =  ary.findIndex((x)=> x.count === id1);
        // ary.splice(ind,1);
    }


  return (
    <>

         <h1>Input</h1>
         <form action="">
                <input type="text" name="" id="" ref={inpref}/>
          </form>
         
          <table border={1}>
            <thead>
              <tr>
                <th>count</th>
                <th>name</th>
              </tr>
            </thead>
            <tbody>
             
                {ary.map((x,index) => <tr key={index}>
                  <td >{x.name}</td>
                  <td >{x.count}</td>
                  <td ><button onClick={delete1(x.count)}>DELET</button></td>
                  </tr>) }
             
            </tbody>
          </table>

          
         <button onClick={show}>Click me</button>
    </>
  )
}
