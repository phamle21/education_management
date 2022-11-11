import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

export const TabularDataBasicItems = () => {
  return (
    <div className="mb-n2">
      <Card className="mb-2">
        <Row className="g-0 sh-14 sh-md-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body>
              <Row className="g-0 h-100 align-content-center">
                <Col md="6" className="d-flex align-items-center mb-2 mb-md-0">
                  <Button variant="link" className="p-0 stretched-link text-start">
                    Barmbrack
                  </Button>
                </Col>
                <Col md="3" className="d-flex align-items-center text-muted text-medium">
                  Whole Wheat
                </Col>
                <Col md="3" className="d-flex align-items-center justify-content-md-end text-muted text-medium">
                  1.543 Sales
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 sh-14 sh-md-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body>
              <Row className="g-0 h-100 align-content-center">
                <Col md="6" className="d-flex align-items-center mb-2 mb-md-0">
                  <Button variant="link" className="p-0 stretched-link text-start">
                    Cheesymite Scroll
                  </Button>
                </Col>
                <Col md="3" className="d-flex align-items-center text-muted text-medium">
                  Whole Wheat
                </Col>
                <Col md="3" className="d-flex align-items-center justify-content-md-end text-muted text-medium">
                  2.701 Sales
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 sh-14 sh-md-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body>
              <Row className="g-0 h-100 align-content-center">
                <Col md="6" className="d-flex align-items-center mb-2 mb-md-0">
                  <Button variant="link" className="p-0 stretched-link text-start">
                    Cholermüs
                  </Button>
                </Col>
                <Col md="3" className="d-flex align-items-center text-muted text-medium">
                  Multigrain
                </Col>
                <Col md="3" className="d-flex align-items-center justify-content-md-end text-muted text-medium">
                  4.024 Sales
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 sh-14 sh-md-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body>
              <Row className="g-0 h-100 align-content-center">
                <Col md="6" className="d-flex align-items-center mb-2 mb-md-0">
                  <Button variant="link" className="p-0 stretched-link text-start">
                    Ruisreikäleipä
                  </Button>
                </Col>
                <Col md="3" className="d-flex align-items-center text-muted text-medium">
                  Sourdough
                </Col>
                <Col md="3" className="d-flex align-items-center justify-content-md-end text-muted text-medium">
                  1.972 Sales
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
