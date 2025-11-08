import React from 'react'
import about from "../gallary/about.png"
import { Col, Container, Row } from 'react-bootstrap'
import points from "../gallary/points.png";
import u1 from "../gallary/u1.png"
import u2 from "../gallary/u2.jpg"
import u3 from "../gallary/u3.jpg"
import rocket from  "../gallary/rocket.png";
export default function AboutPage() {
  return (
    <Container>
        <Row>
            
                <Col className='col-lg-6 col-12'>
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
      ABOUT US
    </h1>
    <p className='m-0 mb-2 p-0 text-light fs-3'>
      Crafting Digital Legacies, One at a Time
    </p>
    <p>
      Webinor helps you build stunning, responsive websites with ease. From
      personal portfolios to business sites, we turn your ideas into a
      professional online presence that stands out.
    </p>
    <button className='custom-btn me-2'>Explore Templates</button>
  </div>
</Col>
<Col className='col-lg-6 d-none d-lg-block'>
<img src={about} alt="about image"  className='w-100 h-100'/>
</Col>

        </Row>
        <Row className='mt-4'>
            <Col style={{ background: "#212529" }} className="rounded p-4 col-lg-8 col-12">
                      <Row className="align-items-center">
                        <Col className="col-md-7 col-12">
                          <h2
                            style={{
                              fontWeight: "600",
                              color: "#fff",
                              fontSize: "24px",
                              marginBottom: "10px",
                            }}
                          >
                            Our Story
                          </h2>
                          <p
                            style={{
                              fontSize: "16px",
                              lineHeight: "1.8",
                              color: "#ddd",
                              textAlign: "justify",
                            }}
                          >
                            Our story began with a simple idea — to help businesses grow through technology.
                            What started as a small team of passionate developers has now evolved into a
                            full-service digital agency. From day one, our mission has been clear: deliver
                            high-quality, affordable, and user-friendly web solutions that empower brands to
                            stand out online.
                          </p>
            
                          <Row className="mt-3">
                            <h5>Why Choose Us?</h5>
                            {[
                              "Expert Developers",
                              "Affordable Pricing",
                              "Timely Project Delivery",
                              "24/7 Service",
                              "Client Satisfaction",
                              "End-to-End Services",
                            ].map((point, i) => (
                              <Col key={i} className="col-6 mb-2 d-flex align-items-center">
                                <img
                                  src={points}
                                  alt="webinor"
                                  style={{
                                    borderRadius: "50%",
                                    width: "18px",
                                    marginRight: "8px",
                                  }}
                                />
                                <p
                                  className="m-0"
                                  style={{
                                    fontSize: "15px",
                                    color: "#ccc",
                                    lineHeight: "1.5",
                                  }}
                                >
                                  {point}
                                </p>
                              </Col>
                            ))}
                          </Row>
                        </Col>
            
                        <Col className="col-md-5 col-12 d-flex flex-column justify-content-center align-items-center mt-4 mt-lg-0">
                          <div style={{ width: "100px" }} className="d-none d-md-block">
                            <img
                              src={rocket}
                              alt="rocket"
                              className="w-100 rounded-50 p-2 mb-3"
                            />
                          </div>
                          <h5 style={{ color: "#fff", fontWeight: "600" }}>Empower Growth</h5>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#ccc",
                              textAlign: "center",
                              lineHeight: "1.6",
                              maxWidth: "220px",
                            }}
                          >
Turning your vision into digital.
                          </p>
                        </Col>
                      </Row>
                    </Col>
                      <Col className='col-lg-4 col-md-8 mt-lg-5 mx-auto'>
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
  )
}
