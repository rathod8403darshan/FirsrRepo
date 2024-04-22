import React from 'react'
import Form1 from './Form1'
import Form2 from './Form2'

function FlexFun() {
  return (
    <div className=''>
       <div className='row'>
       <div className='col-6'>
                <Form2/>
        </div>
        <div className='col-6'>
                <Form1/>
        </div>
       </div>
    </div>
  )
}

export default FlexFun