import React, { useState } from 'react'
import {Link, Outlet, useParams} from "react-router-dom"
import HocCompo from './HocCompo';

function Information() {
const [count, setcount] = useState(0)
  const params = useParams(); 

  return (
    <div className='container'>
        <h1>Information</h1>
      <Outlet/>
     <Link to={`/information/${count}`} className='btn btn-dark'>Id</Link>

     <h1>{params.name}</h1>
    <button className='btn btn-dark' onClick={()=> setcount(count+1)}>Click ME</button>
    </div>
  )
}

export default  HocCompo(Information)