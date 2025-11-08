import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import {Col, Row} from "react-bootstrap"
import TemplateCard from '../components/TemplateCard'
import security from "../gallary/security-icon.png"
import brain from "../gallary/brain.png"
import rocket from "../gallary/rocket.png"
import search from "../gallary/search.png"
import u1 from "../gallary/u1.png"
import u2 from "../gallary/u2.jpg"
import u3 from "../gallary/u3.jpg"
import About from './About'
import Services from './Services'
import Contact from './Contact'
export default function Home() {
  return (
        <>
    <Container id='home'>  
        <Row>
<Col className='col-md-6 col-12'>
        <div  className='mt-4'>
        <small style={{fontSize:"9px"}}>something here</small>
       <h1
              style={{
                fontFamily: "sans-serif",
                fontWeight: "700",
                marginBottom: "5px",
                lineHeight: "1.2",
              }}
            >DESIGN. <span className='deploy-color'>DEPLOY.</span> <br />DOMINATE</h1>
        <p className='m-0 mb-2 p-0 '>Your Digital Evaluation Brings Here</p>
        <button className='custom-btn me-2 '>Explore Templates</button> 
        <button className='custom-btn'>View Our Work</button>
    </div>
    </Col>

 
    

    <Col className='col-lg-6 col-12 bg text-center mt-3 mt-lg-5 pt-lg-5'>
  
        <h4 className='m-0 mt-md-4'>Browse Our Templates</h4>
        <TemplateCard/>
  
    </Col>
    </Row>
    <Row>
        <Col className='col-md-6 col-12'>
        <h4 className='text-center mb-4 mt-4'>Our SuperPowers</h4>
        <div className='d-flex flex-row justify-content-evenly'>
        <div>
<div style={{width:"95px"}}><img src={security} alt="secure" className='w-100 rounded-50 p-3' />
<h6 className='icons-home mt-2'>Rapid Deployment</h6>
<p className='icons-home'>Leading Edge</p>
</div>

        </div>

<div><div style={{width:"100px"}}><img src={brain} alt="brain" className='w-100 rounded-50 p-3' />
<h6 className='icons-home mt-2'>AI Driven Design</h6>
<p className='icons-home'>Intuitive Designs</p>
</div></div>
<div><div style={{width:"100px"}}><img src={search} alt="brain" className='w-100 rounded-50 p-3' />
<h6 className='icons-home mt-2'>SEO Optimized</h6>
<p className='icons-home'>Zero code</p>
</div></div>
<div><div style={{width:"100px"}} className='d-none d-lg-block'><img src={rocket} alt="brain" className='w-100 rounded-50 p-2' />
<h6 className='icons-home mt-2'>Secure & Scalable</h6>
<p className='icons-home'>Encryption</p>
</div></div>
</div>
        </Col>

        <Col className='col-md-5 col-12'>
        <h4 className='text-center mb-4 mt-4'>Meet the Innovators</h4>
        <div className='d-flex flex-row justify-content-evenly'>
        <div>
<div style={{width:"100px"}}><img src={u1} alt="secure" className='w-100 rounded-50' />
<h6 className='icons-home mt-2'>Komail</h6>
<p className='icons-home'>Frontend Developer</p>
</div>

        </div>

<div><div style={{width:"100px"}}><img src={u2} alt="brain" className='w-100 rounded-50' />
<h6 className='icons-home mt-2'>Ahsan</h6>
<p className='icons-home'>FullStack Developer</p>
</div></div>
<div><div style={{width:"100px"}}><img src={u3} alt="brain" className='w-100 rounded-50' />
<h6 className='icons-home mt-2'>Maarij</h6>
<p className='icons-home'>Marketing Expert</p>
</div></div>

</div>
        </Col>
        </Row> 
    </Container>
    <About/>
    <Services/>
    <Contact/>
</>
  )
}
