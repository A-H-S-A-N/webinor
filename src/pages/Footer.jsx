import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../gallary/logo3.png"
export default function Footer() {
  return (
    <>
<Container fluid className='rounded mt-5 p-4' style={{background:"black"}}>
    
    <Row>
        <Col className='col-lg-4 col-md-12 mb-md-4 col-12 border-footer'>
        <div style={{height:"100px"}}><img src={logo} alt="webinor" className='h-100'/></div>
        <p className='m-0 text-secondary'><span className='text-purple'>Email:</span> webinor@gmail.com</p>
        <p className='m-0 text-secondary'><span className='text-purple'>Phone:</span> 0312123242</p>
        </Col>
        <Col className='col-lg-4 col-md-6 col-12 border-footer m-md-0 mt-3'>
        <h4 className='pb-2 text-center'>Resources <span className='deploy-color'>&</span> Company</h4>
        <Row className='footer-row w-75 mx-auto'>
            <Col className='col-6'>
            <p>Blog</p>
            <p>Case Studies</p>
            <p>Webinars</p>
            <p>Eur Team</p>
            </Col>
            <Col className='col-6 text-center'>
            <p>About Us</p>
            <p>Careers</p>
            <p>Our Team</p>
            <p>Testimonials</p>
            </Col>
        </Row>
        </Col>
        <Col className='col-lg-4 col-md-6 col-12 m-md-0 mt-3'>
        <h4 className='pb-2 text-center'>Support <span className='deploy-color'>&</span> Legal</h4>
        <Row className='footer-row w-75 mx-auto'>
            <Col className='col-6'>
            <p>Contact us</p>
            <p>FAQ</p>
            <p>Our Henter</p>
            
            </Col>
            <Col className='col-6 text-center'>
            <p>Contact us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            </Col>
        </Row>
        </Col>

    </Row>
</Container>
<footer className='footer' style={{background:"black"}}>
    <p>Copyright &copy; 2025 WebInOr. All rights reserved.</p>
</footer>
</>
)
}
