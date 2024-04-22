// import React from 'react'

// function Sec11() {
//   return (

//     <div className='container'>
//              <div className="mx-auto text-center mb-5 mt-5 pt-5">
//           <h1 className="mb-3 fs-3 fw-bold" id="beforeh1">
//           CONTACT
//           </h1>
//           <p className="fw-semibold">

//             Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
//           </p>
//         </div>



//         <div className="row">
//             <div className="col-6">



//             </div>
//             <div className="col-6">bjsfbw</div>
//         </div>
//     </div>
//   )
// }

// export default Sec11


import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
function Contact() {
  const Contact = [
    {
      Licone: <FaMapMarkerAlt />,
      Ltype: 'Our Address',
      Linfo: 'A108 Adam Street, New York, NY 535022',
    },
    {
      Licone: <FaRegEnvelope />,
      Ltype: 'Email Us',
      Linfo: 'info@example.com',
      Linfo1: 'contact@example.com',
    },
    {
      Licone: <FiPhoneCall />,
      Ltype: 'Call Us',
      Linfo: ` +1 5589 55488 55`,
      Linfo1: ` +1 6678 254445 41`,
    },
  ]
  return (
    <>
      <section className='w-100 topbottom ' style={{ background: "#f7fcfc" }}>
        <div className=''>
          <div className='container setMP'>
            <div className="mx-auto text-center mb-5 mt-5 pt-5">
              <h1 className="mb-3 fs-3 fw-bold" id="beforeh1">
                CONTACT
              </h1>
              <p className="fw-semibold">

                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              </p>
            </div>
          </div>

        </div>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-12 col-lg-6'>
              <div className='row text-center g-2'>

                {
                  Contact.map((x, i) => {
                    return (
                      <div className={`p-2 m-0  ${i === 0 ? 'col-12' : 'col-12 col-md-6'} `} key={i}>
                        <div className='p-4 shadow-lg'>
                          <div className='d-inline-block fs-3 text-center  rounded-circle' style={{ border: '2px dotted #e03a3c', height: '50px', width: '50px', color: "#e03a3c" }}>{x.Licone}</div>
                          <div className='py-2 fw-bold fs-5' style={{ color: '#777777' }}>{x.Ltype}</div>
                          <div className='fs-6'>{x.Linfo} {x.Linfo1 ? <p>{x.Linfo1}</p> : ""}</div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='col-12 col-lg-6 shadow-lg p-4 text-center'>
              <div className='row g-3'>
                <div className='col-12 col-md-6 '><input type='text' className='w-100 py-1 text-capitalize ps-2 ' placeholder='your name' style={{ border: '1px solid #dee2e6' }} /></div>
                <div className='col-12 col-md-6 '><input type='email' className='w-100 py-1 text-capitalize ps-2' placeholder='your email' style={{ border: '1px solid #dee2e6' }} /></div>
                <div className='col-12'><input type='text' className='w-100 py-1 text-capitalize ps-2' placeholder='subject' style={{ border: '1px solid #dee2e6' }} /></div>
                <div className='col-12'><textarea type='text' className='w-100 text-capitalize ps-2' placeholder='message' rows='6' style={{ border: '1px solid #dee2e6' }} /></div>
                <div className='col-12'><button className='btn text-white rounded-1 px-3' style={{ backgroundColor: '#e03a3c' }} >Send Message</button></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact


