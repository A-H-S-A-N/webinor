import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import i1 from "../gallary/s1.png"
import i2 from "../gallary/s2.png"
import i3 from "../gallary/s3.png"
import i4 from "../gallary/s4.png"
import i5 from "../gallary/s5.png"
import i6 from "../gallary/s6.png"
export default function Services() {
  return (
    <Container className='mt-3' id='services'>
        <h1
              style={{
                fontFamily: "sans-serif",
                fontWeight: "700",
                marginBottom: "5px",
                lineHeight: "1.2",
              }}
            >
              Our Services: <br />
              Your Digital Foundation
            </h1>
            <p>Building digital strength that drives growth.</p>
            
<Row className='d-flex justify-content-center-md gap-lg-2 gap-0 '>
  <Col md={4} lg={3} sm={12} className=" rounded text-center p-2 border-right-black" style={{background:"#212529"}}>
    <img src={i1} style={{height:"130px"}} alt="Webinor"/>
    <h5 className='text-center' style={{fontWeight:"650"}}>TEMPLATES  & CUSTOMIZATION</h5>
    <p className='text-center text-light m-0 p-0'>Launch faster with templates or go unique with our custom designs.</p>
  </Col>
 <Col md={4} lg={3} sm={12} className=" rounded text-center  p-2 border-right-black" style={{background:"#212529"}}>
    <img src={i2} style={{height:"130px"}} alt="Webinor" />
    <h5 className='text-center' style={{fontWeight:"650"}}>FULL WEBSITE DEVELOPMENT</h5>
    <p className='text-center text-light m-0 p-0'>We design, develop, and deploy websites that grow your business.</p>
  </Col>
  <Col md={4} lg={3} sm={12} className="rounded col-md-  text-center p-2" style={{background:"#212529"}}>
    <img src={i3} style={{height:"130px"}} alt="Webinor"  />
    <h5 className='text-center' style={{fontWeight:"650"}}>HOSTING, DOMAIN & CLOUD</h5>
    <p className='text-center text-light m-0 p-0'>One-stop solution for hosting, domain, and cloud infrastructure.</p>
  </Col>
 <Col md={4} lg={3} sm={12} className=" rounded text-center mb-2 p-2 border-right-black margin-bottom-4" style={{background:"#212529"}}>
    <img src={i4} style={{height:"130px"}} alt="Webinor"/>
    <h5 className='text-center' style={{fontWeight:"650"}}>SEO & Digital Customization</h5>
    <p className='text-center text-light m-0 p-0'>Improve your visibility with strategies search engines and social media.</p>
  </Col>
 <Col md={4} lg={3} sm={12} className=" rounded text-center mb-2  p-2 border-right-black margin-bottom-4" style={{background:"#212529"}}>
    <img src={i5} style={{height:"130px"}} alt="Webinor" />
    <h5 className='text-center' style={{fontWeight:"650"}}>E-commerce Solutions</h5>
    <p className='text-center text-light m-0 p-0'>We design, develop, and deploy websites that grows your business.</p>
  </Col>
  <Col md={4} lg={3} sm={12} className="rounded col-md- mb-2  text-center p-2 margin-bottom-4" style={{background:"#212529"}}>
    <img src={i6} style={{height:"130px"}} alt="Webinor"  />
    <h5 className='text-center' style={{fontWeight:"650"}}>CONTENT CREATION</h5>
    <p className='text-center text-light m-0 p-0'>Write, edit, & publish with easy-to-use tools for your website.</p>
  </Col>
  
</Row>
    </Container>
  )
}
