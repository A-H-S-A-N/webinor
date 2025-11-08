import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imgIcon from "../gallary/list-img.png"
import web from "../gallary/web-learnmore.png"
import imgOne from "../gallary/1.png"
import imgtwo from "../gallary/4.png"
import imgthree from "../gallary/5.png"
import imgfour from "../gallary/img.png"
export default function SEOLearn() {
  return (
    <Container>
        <Row className='d-flex justify-content-between'>
            <Col className='col-3 d-none d-lg-block'>
            <Row>
                <Col>
                <img src={web} alt="webinor" className='w-100' />
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col className='col-12 text-center mt-4 pt-4'>
                <h3>Ready to Start</h3>
                </Col>
                <Col>
                <button className='custom-btn mt-3'>REQUEST A FREE CONSULTATION</button>
                </Col>
            </Row>
            </Col>
            <Col className='col-lg-8 col-12'>
            <Row>
                <Col className='col-md-8 col-12'>
             <div className="mt-4">
            <small style={{ fontSize: "10px", color: "#aaa", letterSpacing: "1px" }}>Something here</small>
            <h1
              style={{
                fontFamily: "sans-serif",
                fontWeight: "700",
                marginBottom: "5px",
                lineHeight: "1.2",
              }}
            >
              Secure Your Digital Presence.
              Fast, Reliable & Scaable
            </h1>
            <p
              className="text-light"
              style={{
                fontSize: "15px",
                marginBottom: "15px",
                color: "#bbb",
                fontStyle: "italic",
              }}
            >
Uninuerupteted performance with our robust hosting & strategies that gurrentee-red infrastructure.          </p>
          </div>
          </Col>
          <Col className='col-md-4 col-12 my-auto'> 
          <h5>Key Advantages</h5>
          <p className='icon-learnmore m-1'><img src={imgIcon} alt="img" /> Maximum Uptime</p>
          <p className='icon-learnmore m-1'><img src={imgIcon} alt="img"/> Blazing-Fast Speed</p>
          <p className='icon-learnmore m-1'><img src={imgIcon} alt="img" /> Global Data centers</p>
          <p className='icon-learnmore m-1'><img src={imgIcon} alt="img"/> Top-Tier Security</p>
         
          </Col>
          <h4 className='mt-4'>What's Included</h4>
          <Row className=' '>
           
            <Col className='col-md-3 col-12 rounded bg-dark mb-1 me-1 p-2' style={{border:"3px solid #8A29BA"}}>
            <Row style={{fontSize:"13px"}}>
            
                <Col className='text-center'>
             <h6> Managed Hosting</h6>
                </Col>
            </Row>
            <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-2 ' >
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
                <Col>
Get website hosted and running smoothly.                </Col>
            </Row>
            </Col>
            <Col className='col-md-3 col-12 rounded bg-dark mb-1 me-1 p-2' style={{border:"3px solid #8A29BA"}}>
            <Row style={{fontSize:"13px"}}>
            
                <Col className='text-center'>
             <h6> Cloud Infrastructure</h6>
                </Col>
            </Row>
              <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-2 ' >
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
                <Col>
Scalable Cloud Solutions
                </Col>
            </Row>
            <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-2 ' >
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
                <Col>
Custom Cloud Architecture
                </Col>
            </Row>
            </Col>
            <Col className='col-md-3 col-12 rounded bg-dark mb-1 me-1 p-2' style={{border:"3px solid #8A29BA"}}>
            <Row style={{fontSize:"13px"}}>
            
                <Col className='text-center'>
             <h6> Brand Protection</h6>
                </Col>

            </Row>
            <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-2 ' >
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
                <Col>
We help you register a domain and protect your brand name online.  
              </Col>
            </Row>
            </Col>
           <Col className='col-md- rounded bg-dark mb-1 me-1 p-2' style={{border:"3px solid #8A29BA"}}>
            <Row style={{fontSize:"13px"}}>
            
                <Col className='text-center'>
             <h6> Website Maintenance</h6>
                </Col>
            </Row>
              <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-2 ' >
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
                <Col>
Keep your website updated, secure, and performing at its best.                </Col>
            </Row>
                       </Col>
          </Row>
          <h4 className='mt-4'>Our Latest Work</h4>
          <Row className='gap-md-1 g-2'>
            <Col className='col-md-3 col-6 bg-dark rounded p-2 border-sm-right' >
            <img src={imgOne} alt="" className='w-100 h-50' />
            <h5 className='text-center m-1'>Launge</h5>
            <p className='m-0 text-center'>This project was about coffee shop.</p>
            </Col>
             <Col className='col-md-3 col-6 bg-dark rounded p-2'>
            <img src={imgtwo} alt="" className='w-100 h-50' />
            <h5 className='text-center m-1'>Launge</h5>
            <p className='m-0 text-center'>This project was about coffee shop.</p>
            </Col>
             <Col className='col-md-3 col-6 bg-dark border-sm-right rounded p-2'>
            <img src={imgthree} alt="" className='w-100 h-50' />
            <h5 className='text-center m-1'>Launge</h5>
            <p className='m-0 text-center'>This project was about coffee shop.</p>
            </Col>
             <Col className='col- bg-dark rounded p-2'>
            <img src={imgfour} alt="" className='w-100 h-50' />
            <h5 className='text-center m-1'>Launge</h5>
            <p className='m-0 text-center'>This project was about coffee shop.</p>
            </Col>

          </Row>
          </Row>
            </Col>
        </Row>
    </Container>
  )
}
