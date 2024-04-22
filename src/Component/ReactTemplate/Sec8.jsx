import React from 'react'

function Sec8() {
  const arr = [
  {
     title : "FREE",
     price : "0",
  },
  {
     title : "BUSINESS",
     price : "19",
  },
  {
     title : "DEVELOPER",
     price : "29",
  },
]
  return (
    <div>
       
      <div className="main position-relative p-5 mt-5 mb-5">
      <div className="container " >
      <div className='mx-auto text-center text-light mb-5 mt-5 pt-5'>
                <h1 className='mb-3 fs-3 fw-bold' id='beforeh1' >SERVICES</h1>
                <p className='fw-semibold'> Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
        </div>

        <div className="row g-3">

           {arr.map((x,i)=>(
                  <div className="col-lg-4 col-md-6" key={i}>
                  <div className="box text-center py-5 text-light rounded-3" style={{backgroundColor:i===1 ? "#e03a3c" : "#2b2b2b"}}>
                    <h4 className='fw-normal '>{x.title}</h4>
                    <h4><sup>$</sup ><span className='fs-1'>{x.price}</span><span className='fs-6 fw-light '> / month</span></h4>
                    <ul id='space-ul'>
                      <li>Aida dere</li>
                      <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li className={`  ${i===0 && "text-light-emphasis"} ${i===0 && "text-decoration-line-through"}`}>Pharetra massa</li>
                      <li className={`  ${i=== 0 && "text-decoration-line-through text-light-emphasis"} ${i=== 1 && "text-decoration-line-through text-light-emphasis"}`}>Massa ultricies mi</li>
                    </ul>
                    <div className="btn-wrap">
                      <button className="btn border-2 border-dark-subtle text-light">Buy Now</button>
                    </div>
                  </div>
                </div> 
           ))}
      </div>

      

          {/* <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="box featured aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <h3>Business</h3>
              <h4><sup>$</sup>19<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="box aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
              <h3>Developer</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div> */}

        </div>
        <div
            className="w-100 h-100 position-absolute bg-dark top-0 start-0 end-0 bottom-0"
            style={{ zIndex: -1, transform: "skewY(-3deg)"}}
          ></div>

      </div>
    </div>
  )
}

export default Sec8
