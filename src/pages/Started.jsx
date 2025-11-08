import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import i1 from "../gallary/s1.png"
import i2 from "../gallary/s2.png"
import i3 from "../gallary/s3.png"
import i4 from "../gallary/s4.png"
import i5 from "../gallary/s5.png"
import i6 from "../gallary/s6.png"
import { useNavigate } from 'react-router-dom'
export default function Started() {
  const navigate=useNavigate()
  return (
   <Container>
    <Row className='d-flex justify-content-between'>
<Col className='col-lg-5 col-12'>
<Row>
             <Col className='col-12'>
  <div className='mt-4'>
    <small style={{ fontSize: "9px" }}>
      Empowering creators and small businesses
    </small>
    <h1
      style={{
        fontFamily: "sans-serif",
        fontWeight: "700",
        marginBottom: "2px",
        lineHeight: "1.2",
      }}
    >
      LET'S BUILD YOUR <br /> DIGITAL FUTURE
    </h1>
    <p className='m-0 mb-2 p-0 text-light'>
      Share your vision, and we will bring it to life.
    </p>
  </div>
</Col>

<Col className='col-12 bg-dark rounded p-3 mt-4'>
<h4>Tell Us About Your Project!</h4>
<Row>
    <Col className='col-12'>
    <input type="text" placeholder='Full Name' className='rounded w-100 mt-3 p-2 text-white input-bg'/>
    </Col>
    <Col className='col-5 mt-2'>
    <input type="email" placeholder='Email Address' className='rounded w-100 p-2 text-white input-bg'/>
    </Col>
    <Col className='col-7'>
<select id="project-type" name="project-type" required className='p-2 rounded w-100 input-bg text-white  mt-2 border-none' style={{cursor:"pointer"}}>
    <option value="" disabled selected>Select Your Project Type</option>
    
    <option value="new-website">Build a New Custom Website</option>
    <option value="template-launch">Launch a Site with a Template</option>
    <option value="e-commerce">Develop an Online Store (E-commerce)</option>
    <option value="site-improvement">Improve My Existing Site (Redesign/Maintenance)</option>
    <option value="marketing-seo">Marketing & SEO Services</option>
    <option value="hosting">Website Hosting & Infrastructure</option>
</select>
    </Col>
    <Col className='col-12'>
    <Row>
      <Col className='col-5 p-2 ps-3 pt-3 text-center '>Contact Number (Optional)</Col>
      <Col className='col-7'>
      <input type="number" className='w-100 rounded p-2 mt-1 input-bg text-white' placeholder='e.g 03001234567' />
      </Col>
    </Row>
    <input type="text" placeholder='Project Description' className='w-100 mt-1 p-2 text-white rounded input-bg' />
     </Col>
     <button className='custom-btn mt-3' style={{width:"250px"}}>Request a free consultation</button>
</Row>
</Col>
</Row>
<Row>
  <Col className='mt-3 bg-dark pt-3 rounded'>
  <h4>Why Partner with Us?</h4>
  <ul>
    <li>Expert team, exceptional results.</li>
    <li>Dedicated support from start to finish.</li>
  </ul>
  </Col>
</Row>
</Col>
<Col className='col-lg-6 col-12 mt-5 pt-lg-5 text-center '>
<h4>Not Sure? Explore Our Services:</h4>
<Row>
 <Col md={4}  sm={12} className=" rounded text-center p-2 border-right-black margin-bottom-4 border-custom-right border-custom-bottom" style={{background:"#212529"}}>
    <img src={i1} style={{height:"130px"}} alt="Webinor"/>
    <h5 className='text-center' style={{fontWeight:"650"}}>TEMPLATES  & CUSTOMIZATION</h5>
    <button className='custom-btn' onClick={()=>navigate("/learn-more/template")}>Learn more</button>
  </Col>
 <Col md={4} sm={12} className=" rounded text-center  p-2 border-right-black margin-bottom-4 border-custom-right border-custom-bottom" style={{background:"#212529"}}>
    <img src={i2} style={{height:"130px"}} alt="Webinor" />
    <h5 className='text-center' style={{fontWeight:"650"}}>FULL WEBSITE DEVELOPMENT</h5>
    <button className='custom-btn' onClick={()=>navigate("/learn-more/web")}>Learn more</button>
  </Col>
  <Col md={4} sm={12} className="rounded col-md-  text-center p-2 margin-bottom-4 border-custom-bottom" style={{background:"#212529"}}>
    <img src={i3} style={{height:"130px"}} alt="Webinor"  />
    <h5 className='text-center' style={{fontWeight:"650"}}>HOSTING, DOMAIN & CLOUD</h5>
    <button className='custom-btn' onClick={()=>navigate("/learn-more/seo")}>Learn more</button>
  </Col>
 <Col md={4} sm={12} className=" rounded text-center mb-2 p-2 border-right-black margin-bottom-4 border-custom-right" style={{background:"#212529"}}>
    <img src={i4} style={{height:"130px"}} alt="Webinor"/>
    <h5 className='text-center' style={{fontWeight:"650"}}>SEO & Digital Customization</h5>
    <button className='custom-btn' onClick={()=>navigate("/learn-more/seo")}>Learn more</button>
  </Col>
 <Col md={4} sm={12} className=" rounded text-center mb-2  p-2 border-right-black margin-bottom-4 border-custom-right" style={{background:"#212529"}}>
    <img src={i5} style={{height:"130px"}} alt="Webinor" />
    <h5 className='text-center' style={{fontWeight:"650"}}>E-commerce Solutions</h5>
    <button className='custom-btn' onClick={()=>navigate("/learn-more/eccomerence")}>Learn more</button>
  </Col>
  <Col md={4} sm={12} className="rounded col-md- mb-2  text-center p-2 margin-bottom-4" style={{background:"#212529"}}>
    <img src={i6} style={{height:"130px"}} alt="Webinor"  />
    <h5 className='text-center' style={{fontWeight:"650"}}>CONTENT CREATION & management</h5>
    <button className='custom-btn' onClick={()=>navigate("/learn-more/content")}>Learn more</button>
  </Col>
  </Row>
</Col>
    </Row>
   </Container>
  )
}
