import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import i1 from "../gallary/s1.png"
import i2 from "../gallary/s2.png"
import i3 from "../gallary/s3.png"
import i4 from "../gallary/s4.png"
import i5 from "../gallary/s5.png"
import i6 from "../gallary/s6.png"
export default function ServicesPage() {
  return (
    <Container>
        <Row>
        <Col className='col-md-7 col-12 '>
             <div className='mt-4'>
               <small style={{ fontSize: "9px" }}>
Digital Foundation               </small>
               <h1
                 style={{
                   fontFamily: "sans-serif",
                   fontWeight: "700",
                   marginBottom: "2px",
                   lineHeight: "1.2",
                 }}
               >
                 OUR SERVICES: <br />
                 YOUR DIGITAL FOUNDATION
               </h1>
               <p>
Webinor is your all-in-one digital partner dedicated to turning ideas into engaging online experiences. We design modern, user-friendly websites and create smart strategies that attract, engage, and convert your audience. From web development to digital branding and marketing, everything you need to build and grow your online presence starts here.
               </p>
               <button className='custom-btn me-2 mb-4'>Explore Templates</button>
             </div>
           </Col>
            <Col className='col-md-5  col-12'> <div className="login-form-container">
            <div className="p-3 rounded contact-form-wrapper" style={{background:"#212529"}}>
              <Form className='p-2 '>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control
      type="text"
      placeholder="Your Name"
      className="blury-bg custom-input"
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control
      type="email"
      placeholder="Your Email"
      className="blury-bg custom-input"
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicSubject1">
    <Form.Control
      type="text"
      placeholder="Subject"
      className="blury-bg custom-input"
    />
  </Form.Group>

  <Form.Group className="mb-4" controlId="formBasicMessage">
    <Form.Control
      as="textarea"
      rows={5}
      placeholder="Your Message"
      className="blury-bg custom-input"
    />
  </Form.Group>

  <Button  type="submit" className="custom-btn" style={{outline:"none", border:"none"}}>
    DROP MESSAGE
  </Button>
</Form>

            </div>
        </div></Col>
        </Row>
        
<Row className='d-flex justify-content-center-md gap-lg-2 gap-0 mt-4'>
  <Col md={4} lg={3} sm={12} className=" rounded text-center p-2 border-right-black margin-bottom-4" style={{background:"#212529"}}>
    <img src={i1} style={{height:"130px"}} alt="Webinor"/>
    <h5 className='text-center' style={{fontWeight:"650"}}>TEMPLATES  & CUSTOMIZATION</h5>
    <p className='text-center text-light m-0 p-0'>Launch faster with templates or go unique with our custom designs.</p>
  </Col>
 <Col md={4} lg={3} sm={12} className=" rounded text-center p-2 border-right-black margin-bottom-4" style={{background:"#212529"}}>
    <img src={i2} style={{height:"130px"}} alt="Webinor" />
    <h5 className='text-center' style={{fontWeight:"650"}}>FULL WEBSITE DEVELOPMENT</h5>
    <p className='text-center text-light m-0 p-0'>We design, develop, and deploy websites that grow your business.</p>
  </Col>
  <Col md={4} lg={3} sm={12} className="rounded col-md- text-center p-2 margin-bottom-4" style={{background:"#212529"}}>
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
