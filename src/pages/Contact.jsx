import React from 'react'
import { Container,Row, Col, Form, Button } from 'react-bootstrap'
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Contact() {
  return (
<Container className='mt-5' id='contact'>
    <Row>
        {/* <Col className='col-6 text-end'> 
        <h1 style={{fontWeight:"700"}} className='mb-0'>GET IN TOUCH. <br /> LET'S BUILD.</h1>
<p> Contact with us to start your digital journey.</p>
<button className='whatsapp-button'><FaWhatsapp size={30}/> &nbsp; Chat on Whatsapp +92 3254007162</button>
<p className='mt-3'><MdEmail size={20}/> Email us on contact.webinor@gmail.com <FaFacebook size={20}/> <FaInstagram size={20}/> <FaTiktok size={20}/></p>
        </Col> */}
        <Col className='col-lg-6  col-md-6 col-12  d-flex flex-column flex-end align-items-end justify-content-center'> 
   
    <div className='float-end text-start ' style={{ maxWidth: '400px' }}>
        <h1 style={{fontWeight:"700"}} className='mb-0'>
            GET IN TOUCH. <br /> LET'S BUILD.
        </h1>
        <p className='text-start'> Contact with us to start your digital journey.</p>
        
        <button className='whatsapp-button text-sm-small'   onClick={() => window.open('https://wa.me/923254007162?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services', '_blank')}
>
            <FaWhatsapp size={30}/> &nbsp; Chat on Whatsapp +92 3254007162
        </button>
        
<p className='mt-3 text-start text-sm-small'>
  <span
    onClick={() =>
      (window.location.href =
        'mailto:contact.webinor@gmail.com?subject=Inquiry%20About%20Your%20Services&body=Hi%20there,%20please%20share%20more%20details.')
    }
    style={{ cursor: 'pointer' }}
  >
    <MdEmail size={20}/> Email us on contact.webinor@gmail.com &nbsp;
  </span>

  {/* Instagram */}
  <FaInstagram
    size={20}
    style={{ cursor: 'pointer', marginRight: '10px' }}
    onClick={() =>
      window.open('https://www.instagram.com/webinor_/', '_blank')
    }
  />

  {/* Facebook */}
  <FaFacebook
    size={20}
    style={{ cursor: 'pointer', marginRight: '10px' }}
    onClick={() =>
      window.open('https://www.facebook.com/yourpage/', '_blank')
    }
  />

  {/* TikTok */}
  <FaTiktok
    size={20}
    style={{ cursor: 'pointer' }}
    onClick={() =>
      window.open('https://www.tiktok.com/@webinorr', '_blank')
    }
  />
</p>


    </div>
</Col>
        <Col className='col-md-4  col-12'> <div className="login-form-container">
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
</Container>
)
}
