import React from 'react'
import HocCompo from './HocCompo'
import {Outlet} from 'react-router-dom'

function Gallery() {
  return (
   
   <div className='container'>
    <Outlet/>
     <h1>Gallery</h1>
   </div>
  )
}

export default HocCompo(Gallery);