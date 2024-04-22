import React from 'react'
import "../ReactTemplate/assests/css/Sec9accourdian.css"

function Sec9() {

    const arr = [
      {
        id : "headingOne",
        target : "collapseOne",
        title : " Non consectetur a erat nam at lectus urna duis?",
        descri : "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",

      },
      {
        id : "headingTwo",
        target : "collapseTwo",
        title : "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
        descri : "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",

      },
      {
        id : "headingThree",
        target : "collapseThree",
        title : "    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",
        descri : "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",

      },
      {
        id : "headingFour",
        target : "collapseFour",
        title : "    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
        descri : "      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",

      },
      {
        id : "headingFive",
        target : "collapseFive",
        title : "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
        descri : " Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",

      },
      {
        id : "headingSix",
        target : "collapseSix",
        title : " Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?",
        descri : " Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.",

      },
    ]

  return (
    <>
       <div className="container mt-5">
       <div className='mx-auto text-center  mb-5 '>
                <h1 className='mb-3 fs-3 fw-bold' id='beforeh1' >FREQUENTLY ASKED QUESTIONS</h1>
        </div>
       <div className="accordion" id="accordionExample">

      {arr.map((x,i)=>(
             <div className="accordion-item" key={i}>
             <h2 className="accordion-header" id={x.id}>
               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${x.target}`} aria-expanded="false" aria-controls={x.target}>
               {x.title}
               </button>
             </h2>
             <div id={x.target} className={`collapse ${i===0 ? "show" : ""}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
               <div className="accordion-body">
              {x.descri}
               </div>
             </div>
           </div>
      ))}

</div>
       </div>
    </>
  )
}

export default Sec9
