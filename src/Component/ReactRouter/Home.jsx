import React from 'react'
import Header1 from './Header1'
import HocCompo from './HocCompo'

function Home() {
  return (
    <>
    <div className='container'>
        <h1>Home</h1>
    </div>
    </>
  )
}

export default HocCompo(Home);