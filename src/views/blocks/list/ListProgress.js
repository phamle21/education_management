import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ListProgress = () => {
  return (
    <div className="mb-n2">
      <Card className="mb-2">
        <Row className="row g-0 sh-10">
          <Col xs="auto">
            <img src="/img/product/small/product-8.webp" alt="product-8" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="d-flex flex-row pt-0 pb-0 h-100 align-items-center justify-content-between">
              <div className="d-flex flex-column justify-content-center">Basler Brot</div>
              <div className="d-flex flex-row ms-3">
                <div className="sw-5 sh-5 position-relative">
                  <CircularProgressbar value={60} strokeWidth={4} text="" className="w-100 h-100 primary text-small" />
                  <div className="position-absolute absolute-center text-alternate text-small ">60%</div>
                </div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="row g-0 sh-10">
          <Col xs="auto">
            <img src="/img/product/small/product-8.webp" alt="product-8" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="d-flex flex-row pt-0 pb-0 h-100 align-items-center justify-content-between">
              <div className="d-flex flex-column justify-content-center">Cheesymite Scroll</div>
              <div className="d-flex flex-row ms-3">
                <div className="sw-5 sh-5 position-relative">
                  <CircularProgressbar value={75} strokeWidth={4} text="" className="w-100 h-100 primary text-small" />
                  <div className="position-absolute absolute-center text-alternate text-small ">75%</div>
                </div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="row g-0 sh-10">
          <Col xs="auto">
            <img src="/img/product/small/product-8.webp" alt="product-8" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="d-flex flex-row pt-0 pb-0 h-100 align-items-center justify-content-between">
              <div className="d-flex flex-column justify-content-center">Guernsey Gâche</div>
              <div className="d-flex flex-row ms-3">
                <div className="sw-5 sh-5 position-relative">
                  <CircularProgressbar value={25} strokeWidth={4} text="" className="w-100 h-100 primary text-small" />
                  <div className="position-absolute absolute-center text-alternate text-small ">25%</div>
                </div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ListProgress;
