
import React from 'react';
import w1 from '../gallary/w1.png';
import w2 from '../gallary/w2.png';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function TemplateCard () {

  return (
    <Container className="my-3 ">
      <Row
  className="d-flex flex-row flex-nowrap scroll-row scroll-wrapper"
  style={{
    overflowX: "auto",
    scrollBehavior: "smooth",
    gap: "10px",
  }}
>
  <div className="scroll-content">
        <Col className="bg-dark col-5 col-md-4 col-lg-3 px-md-3 rounded me-1 cursor-pointer">
          <div className="card-tag">
            <p className="text-start m-0 py-2" style={{ fontSize: "12px" }}>
              <FontAwesomeIcon className="tag-icon me-2" icon={faUser} /> UI PRO
            </p>
          </div>
          <div className="card-image-container w-100 rounded">
            <img
              src={w1}
              alt="Verna Comens Template Preview"
              className="card-image w-100 rounded mb-2"
            />
          </div>
          <small className="card-title py-3">Verna Comens</small> <br />
 <button className="custom-btn mb-2 mt-2"><small>View</small></button>        </Col>



<Col className="bg-dark col-md-4 col-lg-3 col-5 px-md-3 rounded me-1 cursor-pointer">
          <div className="card-tag">
            <p className="text-start m-0 py-2" style={{ fontSize: "12px" }}>
              <FontAwesomeIcon className="tag-icon me-2" icon={faUser} /> UI PRO
            </p>
          </div>
          <div className="card-image-container w-100 rounded">
            <img
              src={w2}
              alt="Quertitom Template Preview"
              className="card-image w-100 rounded mb-2"
            />
          </div>
          <small className="card-title my-3">Quertitom</small><br />
          <button className="custom-btn my-2"><small>View</small></button>
        </Col>
        <Col className="bg-dark col-md-4 col-lg-3 col-5 px-md-3 rounded cursor-pointer">
          <div className="card-tag">
            <p className="text-start m-0 py-2" style={{ fontSize: "12px" }}>
              <FontAwesomeIcon className="tag-icon me-2" icon={faUser} /> UI PRO
            </p>
          </div>
          <div className="card-image-container w-100 rounded">
            <img
              src={w1}
              alt="Verna Comens Template Preview"
              className="card-image w-100 rounded mb-2"
            />
          </div>
          <small className="card-title my-3">Verna Comens</small><br />
           <button className="custom-btn my-2"><small>View</small></button>
        </Col>

        <Col className="bg-dark col-md-4 col-lg-3 col-5 px-md-3 rounded me-1 cursor-pointer">
          <div className="card-tag">
            <p className="text-start m-0 py-2" style={{ fontSize: "12px" }}>
              <FontAwesomeIcon className="tag-icon me-2" icon={faUser} /> UI PRO
            </p>
          </div>
          <div className="card-image-container w-100 rounded">
            <img
              src={w2}
              alt="Quertitom Template Preview"
              className="card-image w-100 rounded mb-2"
            />
          </div>
          <small className="card-title my-3">Quertitom</small><br />
          <button className="custom-btn my-2"><small>View</small></button>
        </Col>
        <Col className="bg-dark col-md-4 col-lg-3 col-5 px-md-3 rounded cursor-pointer">
          <div className="card-tag">
            <p className="text-start m-0 py-2" style={{ fontSize: "12px" }}>
              <FontAwesomeIcon className="tag-icon me-2" icon={faUser} /> UI PRO
            </p>
          </div>
          <div className="card-image-container w-100 rounded">
            <img
              src={w1}
              alt="Verna Comens Template Preview"
              className="card-image w-100 rounded mb-2"
            />
          </div>
          <small className="card-title my-3">Verna Comens</small><br />
           <button className="custom-btn my-2"><small>View</small></button>
        </Col>
        <Col className="bg-dark col-md-4 col-lg-3 col-5 px-md-3 rounded me-1 cursor-pointer">
          <div className="card-tag">
            <p className="text-start m-0 py-2" style={{ fontSize: "12px" }}>
              <FontAwesomeIcon className="tag-icon me-2" icon={faUser} /> UI PRO
            </p>
          </div>
          <div className="card-image-container w-100 rounded">
            <img
              src={w2}
              alt="Quertitom Template Preview"
              className="card-image w-100 rounded mb-2"
            />
          </div>
          <small className="card-title my-3">Quertitom</small><br />
          <button className="custom-btn my-2"><small>View</small></button>
        </Col>
        <Col className="bg-dark col-md-4 col-lg-3 col-5 px-md-3 rounded cursor-pointer">
          <div className="card-tag">
            <p className="text-start m-0 py-2" style={{ fontSize: "12px" }}>
              <FontAwesomeIcon className="tag-icon me-2" icon={faUser} /> UI PRO
            </p>
          </div>
          <div className="card-image-container w-100 rounded">
            <img
              src={w1}
              alt="Verna Comens Template Preview"
              className="card-image w-100 rounded mb-2"
            />
          </div>
          <small className="card-title my-3">Verna Comens</small><br />
           <button className="custom-btn my-2"><small>View</small></button>
        </Col>

       </div>
      </Row>
    </Container>

  );
};
export default TemplateCard;











