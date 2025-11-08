import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import points from "../gallary/points.png";
import rocket from  "../gallary/rocket.png";

export default function About() {
  return (
    <Container className="mt-5 mb-5" id='about'>
      <Row className="gy-4">
        <Col className="col-lg-5 col-12">
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
              About Us
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
              Crafting Digital Legacies, One at a Time
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                color: "#ddd",
                textAlign: "justify",
              }}
            >
              We are a passionate team of developers, designers, and strategists dedicated to
              building powerful digital experiences. From stunning websites to scalable web
              applications, we help businesses grow and connect with their audience through
              technology. At our core, we believe in innovation, transparency, and long-term
              partnerships. Every project we take is handled with care, creativity, and a focus on
              delivering measurable results.
            </p>
          </div>
        </Col>

        <Col style={{ background: "#212529" }} className="rounded p-4">
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
      </Row>
    </Container>
  );
}

