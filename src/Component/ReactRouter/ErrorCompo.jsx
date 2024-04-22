import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import HocCompo from './HocCompo'

function ErrorCompo() {
  const navigate = useNavigate();
  const showNavigate = ()=>{
      navigate("/")
  }
  return (
    <div className='container'>
        <h1>Error 404</h1>
        <h6>Page is Not Found</h6>
        <Link className='btn btn-danger' to={"/"}>Go to Home</Link>
        <button  className='btn btn-danger'onClick={showNavigate}>Back To home with navigator</button>
    </div>
  )
}

export default ErrorCompo