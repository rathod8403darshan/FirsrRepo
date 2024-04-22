import React from 'react'
import HocCompo from './HocCompo'

function About() {
  return (
    <div className='container'>
         <h1>About</h1>
   </div>
  )
}

export default HocCompo(About)