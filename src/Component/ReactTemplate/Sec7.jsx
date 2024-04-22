import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";


function Sec7() {
     const arr = [
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-1.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "App 1",
            Description:"APP",
        },
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-2.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "Web 3",
            Description:"WEB",
        },
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-3.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "App 2",
            Description:"APP",
        },
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-4.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "Card 2",
            Description:"CARD",
        },
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-5.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "Web 2",
            Description:"WEB",
        },
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-6.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "App 3",
            Description:"APP",
        },
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-7.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "Card 1",
            Description:"CARD",
        },
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-8.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "Card 3",
            Description:"CARD",
        },
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-9.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "Web 3",
            Description:"WEB",
        },

     ]
     const arr4 = [
     
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-2.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "Web 3",
            Description:"WEB",
        },
   
      
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-5.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "Web 2",
            Description:"WEB",
        },
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-9.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "Web 3",
            Description:"WEB",
        },

     ]
     const arr3 = [
        
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-4.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "Card 2",
            Description:"CARD",
        },
     
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-7.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "Card 1",
            Description:"CARD",
        },
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-8.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "Card 3",
            Description:"CARD",
        },

     ]
     const arr2  = [
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-1.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "App 1",
            Description:"APP",
        },
       
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-3.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "App 2",
            Description:"APP",
        },
        {
            img: "https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-6.jpg",
            icon1:<FaPlus/>,
            icon2: <FaLink/>,
            title : "App 3",
            Description:"APP",
        },

     ]
  return (
    <>
    <div className='mx-auto container text-center  mb-5 mt-5'>
                <h1 className='mb-3 fs-3 fw-bold pt-5' id='beforeh1' >PORTFOLIO</h1>
                <p className=''>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
        </div>
      <ul className="nav nav-pills mb-3 w-25  mx-auto text-center mt-3" id="pills-tab" role="tablist">
  <li className="nav-item ms-1" role="presentation">
    <button className="nav-link nav-color px-2 py-1 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </li>
  <li className="nav-item ms-1" role="presentation">
    <button className="nav-link nav-color px-2 py-1" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>
  <li className="nav-item ms-1" role="presentation">
    <button className="nav-link nav-color px-2 py-1" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
  </li>
  <li className="nav-item ms-1" role="presentation">
    <button className="nav-link nav-color px-2 py-1" id="pills-contact-tab1" data-bs-toggle="pill" data-bs-target="#pills-contact1" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div className="tab-content container mt-5" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">


        <div className="row g-3">
            {arr.map((x,i)=>(
                 <div className="col-lg-4 col-md-6 col-12" key={i}>
                 <div className='w-100 h-100 position-relative'id='hovertab' >  
                 <img src={x.img} alt="" className='w-100 h-100'id='imgZoom'/>
                  <div className='position-absolute top-0  start-0 end-0 bottom-0'id='hovcol' >
                         
                         <div className=' text-light fw-lighter position-absolute top-50 mt-3 ms-4'>
                         <h4 className='text-light fw-bolder'>{x.title}</h4>
                         <h6 className="text-light-emphasis fw-medium fst-italic">{x.Description}</h6>
                         <span className='text-light-emphasis'>{x.icon1}</span> <span className="text-light-emphasis">{x.icon2}</span>
                         </div>
                  </div>
                 </div>
             </div>
            ))}
         
        </div>




  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className="row g-3">
            {arr2.map((x,i)=>(
                 <div className="col-lg-4 col-md-6 col-12" key={i}>
                 <div className='w-100 h-100 position-relative'id='hovertab' >
                 <img src={x.img} alt="" className='w-100 h-100'id='imgZoom'/>
                  <div className='position-absolute top-0  start-0 end-0 bottom-0'id='hovcol' >
                         
                         <div className=' text-light fw-lighter position-absolute top-50 mt-3 ms-4'>
                         <h4 className='text-light fw-bolder'>{x.title}</h4>
                         <h6 className="text-light-emphasis fw-medium fst-italic">{x.Description}</h6>
                         <span className='text-light-emphasis'>{x.icon1}</span> <span className="text-light-emphasis">{x.icon2}</span>
                         </div>
                  </div>
                 </div>
             </div>
            ))}
         
        </div>

  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className="row g-3">
            {arr3.map((x,i)=>(
                 <div className="col-lg-4 col-md-6 col-12" key={i}>
                 <div className='w-100 h-100 position-relative'id='hovertab' >
                 <img src={x.img} alt="" className='w-100 h-100'id='imgZoom'/>
                  <div className='position-absolute top-0  start-0 end-0 bottom-0'id='hovcol' >
                         
                         <div className=' text-light fw-lighter position-absolute top-50 mt-3 ms-4'>
                         <h4 className='text-light fw-bolder'>{x.title}</h4>
                         <h6 className="text-light-emphasis fw-medium fst-italic">{x.Description}</h6>
                         <span className='text-light-emphasis'>{x.icon1}</span> <span className="text-light-emphasis">{x.icon2}</span>
                         </div>
                  </div>
                 </div>
             </div>
            ))}
         
        </div>
  </div>
  <div className="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact-tab1">
  <div className="row g-3">
            {arr4.map((x,i)=>(
                 <div className="col-lg-4 col-md-6 col-12" key={i}>
                 <div className='w-100 h-100 position-relative'id='hovertab' >
                 <img src={x.img} alt="" className='w-100 h-100'id='imgZoom'/>
                  <div className='position-absolute top-0  start-0 end-0 bottom-0'id='hovcol' >
                         
                         <div className=' text-light fw-lighter position-absolute top-50 mt-3 ms-4'>
                         <h4 className='text-light fw-bolder'>{x.title}</h4>
                         <h6 className="text-light-emphasis fw-medium fst-italic">{x.Description}</h6>
                         <span className='text-light-emphasis'>{x.icon1}</span> <span className="text-light-emphasis">{x.icon2}</span>
                         </div>
                  </div>
                 </div>
             </div>
            ))}
         
        </div>
  </div>
</div>
    </>
  )
}

export default Sec7