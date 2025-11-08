import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imgIcon from "../gallary/list-img.png"
import web from "../gallary/ecommerence.png"
import imgOne from "../gallary/1.png"
import imgtwo from "../gallary/4.png"
import imgthree from "../gallary/5.png"
import imgfour from "../gallary/img.png"
export default function EcommLearn() {
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
              E-commerence Solutions
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
Build & Scale Your Online Store, Hassle-Free   </p>
          </div>
          </Col>
          <Col className='col-md-4 col-12 my-auto'> 
          <p className='icon-learnmore mb-1'><img src={imgIcon} alt="img" /> Secure payment</p>
          <p className='icon-learnmore'><img src={imgIcon} alt="img"/> Mobile Friendly Design</p>
         
          </Col>
          <h4 className='mt-4'>What's Included</h4>
          <Row className='d-flex justify-content-between '>
            <Col className='col-md-6 col-12 mb-3 mb-md-0  me-md-3'>
            <Row className='bg-dark p-2 rounded' style={{border:"3px solid #8A29BA"}}>
            <Col className='col-6 rounded'>
            <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-1 '>
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
                <Col>
              Discovery Storefront Planning
                </Col>
            </Row>
             <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-1 '>
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
                <Col>
              Wireframming Design
                </Col>
            </Row>
             <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-1 '>
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
                <Col>
              Custom Coding (Front-end & Back-end)
                </Col>
            </Row>
            
            </Col>
            <Col className='col-6'>
            <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-2'>
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
<Col >Custom Catelog Setup</Col>
                </Row>
                <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-2'>
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
<Col >Discount Codes Promations</Col>
                </Row>
                <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-2'>
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
<Col >Analytics & Reporting</Col>
                </Row>
           
            </Col>
            </Row>
            </Col>
            <Col className='col-'>
            <Row className='bg-dark p-2 rounded h-100' style={{border:"3px solid #8A29BA"}}>
            <Col className='col-'>
            <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-1 h-100'>
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
<Col  className='h-100 '>Payment Catelog Setup</Col>
                </Row>
                <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-1 h-100'>
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
<Col  className='h-100 '>Payment Integration (QA testing & Ficing)</Col>
                </Row>
                <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-1 h-100'>
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
<Col  className='h-100 '>Discount Code system</Col>
                </Row>
                <Row style={{fontSize:"13px"}}>
                <Col className='col-1 me-1 h-100'>
                <img src={imgIcon} alt="icon" style={{width:"20px"}} />
                </Col>
<Col  className='h-100 '>Analytics & Reporting</Col>
                </Row>
           
            </Col>
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
