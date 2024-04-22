import React from 'react'
import { Link } from 'react-router-dom'

function ReactLogin() {
  return (
    <div className='text-center mt-2 container'>
        <h1>Login Form</h1>
        <Link className='btn btn-success' to={"/home"} onClick={()=> localStorage.setItem("loginKey",JSON.stringify(false)) }>Login here</Link>

    </div>
  )
}

export default ReactLogin