import React from 'react'
import HocCompo from './HocCompo'

function Contact() {
  return (
    <div className='container'>
        <h1>Contact</h1>
    </div>
  )
}

export default HocCompo(Contact)