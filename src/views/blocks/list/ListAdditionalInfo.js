import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ListAdditionalInfo = () => {
  return (
    <div className="mb-n2">
      <Card className="mb-2">
        <Row className="g-0 sh-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-2.webp" alt="product-2" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="d-flex flex-row pt-0 pb-0 h-100 align-items-center justify-content-between">
              <div className="d-flex flex-column justify-content-center">
                <Button variant="link" className="p-0 stretched-link text-start">
                  Peg Bread
                </Button>
              </div>
              <div className="d-flex flex-row ms-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="text-muted text-small">STOCK</div>
                  <div className="text-alternate">1.244</div>
                </div>
                <div className="d-flex flex-column align-items-center ms-3">
                  <div className="text-muted text-small">SALES</div>
                  <div className="text-alternate">511</div>
                </div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 sh-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-2.webp" alt="product-2" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="d-flex flex-row pt-0 pb-0 h-100 align-items-center justify-content-between">
              <div className="d-flex flex-column justify-content-center">
                <Button variant="link" className="p-0 stretched-link text-start">
                  Rieska
                </Button>
              </div>
              <div className="d-flex flex-row ms-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="text-muted text-small">STOCK</div>
                  <div className="text-alternate">1.710</div>
                </div>
                <div className="d-flex flex-column align-items-center ms-3">
                  <div className="text-muted text-small">SALES</div>
                  <div className="text-alternate">644</div>
                </div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 sh-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-2.webp" alt="product-2" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="d-flex flex-row pt-0 pb-0 h-100 align-items-center justify-content-between">
              <div className="d-flex flex-column justify-content-center">
                <Button variant="link" className="p-0 stretched-link text-start">
                  Samoon
                </Button>
              </div>
              <div className="d-flex flex-row ms-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="text-muted text-small">STOCK</div>
                  <div className="text-alternate">1.083</div>
                </div>
                <div className="d-flex flex-column align-items-center ms-3">
                  <div className="text-muted text-small">SALES</div>
                  <div className="text-alternate">223</div>
                </div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ListAdditionalInfo;
